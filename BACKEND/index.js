require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { HoldingsModel } = require('./Models/Holding'); // Fixed Import if any issues, but using standard pattern below
const Holding = require('./Models/Holding');
const Position = require('./Models/Position');
const Order = require('./Models/Order');
const User = require('./Models/User');

const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken"); // Will use later for token generation

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000", 
    "http://localhost:3001",
    "https://trading-frontend-rose.vercel.app",
    "https://trading-dashboard-opal.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

// MongoDB Connection
mongoose.connect(uri)
    .then(() => console.log("DB Connected!"))
    .catch((err) => console.log("DB Connection Error: ", err));

app.get('/', (req, res) => {
    res.send("Backend is working!");
});

app.get('/test-db', async (req, res) => {
    try {
        const state = mongoose.connection.readyState;
        const status = {
            0: "disconnected",
            1: "connected",
            2: "connecting",
            3: "disconnecting",
        };
        
        let msg = `Request - DB State: ${status[state] || state}`;
        
        if (state !== 1) {
            msg += ". Attempting reconnect...";
            await mongoose.connect(process.env.MONGO_URL);
            msg += " Reconnected.";
        }
        
        // Try simple read
        const count = await User.countDocuments();
        msg += ` User Count: ${count}`;
        
        res.json({ message: msg, success: true });
    } catch (err) {
        res.status(500).json({ message: "DB Test Failed", error: err.message, stack: err.stack });
    }
});

// Temporary Seed Route (Optional, user can run this once)
app.get('/addHoldings', async (req, res) => {
    let tempHoldings = [
        { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+1.20%", day: "+2.99%" },
        { name: "HDFCBANK", qty: 2, avg: 1383.40, price: 1522.35, net: "+10.04%", day: "+0.11%" },
        { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.40, net: "+3.49%", day: "+0.21%" },
        { name: "INFY", qty: 1, avg: 1350.50, price: 1555.45, net: "+15.18%", day: "-1.60%" },
        { name: "ITC", qty: 5, avg: 202.00, price: 207.90, net: "+2.92%", day: "+0.80%" },
        { name: "KPITTECH", qty: 5, avg: 250.30, price: 266.45, net: "+6.45%", day: "+3.54%" },
        { name: "M&M", qty: 2, avg: 809.90, price: 779.80, net: "-3.72%", day: "-0.01%" },
        { name: "RELIANCE", qty: 1, avg: 2193.70, price: 2112.40, net: "-3.71%", day: "+1.44%" },
        { name: "SBIN", qty: 4, avg: 324.35, price: 430.20, net: "+32.63%", day: "-0.34%" },
        { name: "SGBMAY29", qty: 2, avg: 4727.00, price: 4719.00, net: "-0.17%", day: "+0.15%" },
        { name: "TATAPOWER", qty: 5, avg: 104.20, price: 124.15, net: "+19.15%", day: "-0.24%" },
        { name: "TCS", qty: 1, avg: 3041.70, price: 3194.80, net: "+5.03%", day: "-0.25%" },
        { name: "WIPRO", qty: 4, avg: 489.30, price: 577.75, net: "+18.08%", day: "+0.32%" }
    ];

    let tempPositions = [
        { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true }
    ];

    await Holding.insertMany(tempHoldings);
    await Position.insertMany(tempPositions);
    res.send("Done!");
});

app.get('/allHoldings', async (req, res) => {
    let allHoldings = await Holding.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
    let allPositions = await Position.find({});
    res.json(allPositions);
});

app.get('/allOrders', async (req, res) => {
    let allOrders = await Order.find({});
    res.json(allOrders);
});

// Live Stock Price Simulation
const stocks = [
  { name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
  { name: "ONGC", price: 116.80, percent: "-0.09%", isDown: true },
  { name: "TCS", price: 3194.80, percent: "-0.25%", isDown: true },
  { name: "KPITTECH", price: 266.45, percent: "3.54%", isDown: false },
  { name: "QUICKHEAL", price: 308.55, percent: "-0.15%", isDown: true },
  { name: "WIPRO", price: 577.75, percent: "0.32%", isDown: false },
  { name: "M_M", price: 779.80, percent: "-0.01%", isDown: true },
  { name: "RELIANCE", price: 2112.40, percent: "1.44%", isDown: false },
  { name: "HINDUNILVR", price: 512.40, percent: "1.04%", isDown: false },
  { name: "MRF", price: 101400.0, percent: "0.20%", isDown: false },
  { name: "ADANIENT", price: 2980.50, percent: "1.25%", isDown: false },
  { name: "AXISBANK", price: 955.10, percent: "-0.55%", isDown: true },
  { name: "BAJFINANCE", price: 7150.00, percent: "2.10%", isDown: false },
  { name: "ASIANPAINT", price: 3025.75, percent: "-1.10%", isDown: true },
  { name: "TITAN", price: 2890.30, percent: "0.85%", isDown: false }
];

app.get('/allStocks', (req, res) => {
    const liveStocks = stocks.map(stock => {
        // Simulate random price fluctuation (+/- 1%)
        const fluctuation = (Math.random() - 0.5) * 2; // -1 to +1
        const change = stock.price * (fluctuation / 100);
        const newPrice = stock.price + change;
        const isDown = change < 0;
        
        return {
            ...stock,
            price: parseFloat(newPrice.toFixed(2)),
            isDown: isDown,
            percent: (isDown ? "" : "+") + fluctuation.toFixed(2) + "%"
        };
    });
    res.json(liveStocks);
});

app.post('/newOrder', async (req, res) => {
    let newOrder = new Order({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();

    // Update Holdings
    if (req.body.mode === 'buy') {
        let existingHolding = await Holding.findOne({ name: req.body.name });
        if (existingHolding) {
            existingHolding.qty = existingHolding.qty + parseInt(req.body.qty);
            await existingHolding.save();
        } else {
            // Create new holding if it doesn't exist
            let newHolding = new Holding({
                name: req.body.name,
                qty: req.body.qty,
                avg: req.body.price,
                price: req.body.price,
                net: "0%",
                day: "0%"
            });
            await newHolding.save();
        }
    } else if (req.body.mode === 'sell') {
        let existingHolding = await Holding.findOne({ name: req.body.name });
        if (existingHolding) {
            let newQty = existingHolding.qty - parseInt(req.body.qty);
            if (newQty <= 0) {
                 await Holding.deleteOne({ name: req.body.name });
            } else {
                 existingHolding.qty = newQty;
                 await existingHolding.save();
            }
        }
    }

    res.send("Order Saved!");
});

// Auth Routes
const jwt = require("jsonwebtoken");

app.post('/signup', async (req, res) => {
    let checkpoint = "Start";
    try {
        const { email, username, password } = req.body;
        checkpoint = "Check Missing Fields";
        if (!email || !username || !password) {
             return res.json({ message: "All fields are required" });
        }
        checkpoint = "Check Existing";
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        checkpoint = "Hash Password";
        const hashedPassword = await bcrypt.hash(password, 12);
        checkpoint = "Create User";
        const user = await User.create({ email, password: hashedPassword, username });
        checkpoint = "Create Token";
        const token = createSecretToken(user._id);
        checkpoint = "Set Cookie";
        res.cookie("token", token, {
            path: "/",
            httpOnly: false,
            secure: true, // Required for Vercel deployment (HTTPS)
            sameSite: "None", // Required for cross-site cookies
        });
        checkpoint = "Success";
        res.status(201).json({ message: "User signed in successfully", success: true, user });
    } catch (error) {
        console.error("Signup Error Stack:", error.stack);
        // Respond with actual error details for debugging
        res.status(500).json({ 
            message: "Signup failed", 
            error: error.message,
            stack: error.stack, // CAUTION: Only for debugging
            checkpoint: checkpoint 
        });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password ){
            return res.json({message:'All fields are required'})
        }
        const user = await User.findOne({ email });
        if(!user){
            return res.json({message:'Incorrect password or email' }) 
        }
        const auth = await bcrypt.compare(password,user.password)
        if (!auth) {
            return res.json({message:'Incorrect password or email' }) 
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            path: "/",
            httpOnly: false,
            secure: true, // Required for Vercel deployment (HTTPS)
            sameSite: "None", // Required for cross-site cookies
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

function createSecretToken(id) {
  return jwt.sign({ id }, process.env.TOKEN_KEY || "SecretKey123", {
    expiresIn: 3 * 24 * 60 * 60,
  });
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Export for Vercel serverless
module.exports = app;

