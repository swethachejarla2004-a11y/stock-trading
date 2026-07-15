# 📈 Stock Trading Platform - MERN Stack

## 🚀 Live Demo

- **Frontend (Landing Page):** [https://trading-frontend-rose.vercel.app](https://trading-frontend-rose.vercel.app)
- **Dashboard (Trading App):** [https://trading-dashboard-opal.vercel.app](https://trading-dashboard-opal.vercel.app)
- **Backend API:** [https://trading-platform-mern.vercel.app](https://trading-platform-mern.vercel.app)

A full-stack simulated stock trading platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project demonstrates modern web development practices including user authentication, real-time data visualization, and comprehensive testing.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![React](https://img.shields.io/badge/react-19.2.3-blue)

## 🌟 Features

### Core Functionality

- **User Authentication**: Secure signup/login with JWT tokens and bcrypt password hashing
- **Portfolio Management**: Track holdings, positions, and order history
- **Live Stock Simulation**: Real-time price fluctuations using custom API
- **Interactive Charts**: Dynamic doughnut charts showing margin utilization (Chart.js)
- **Order Execution**: Buy/sell stocks with automatic portfolio updates
- **TradingView Integration**: Professional stock charts with technical indicators

### Technical Highlights

- **Full CRUD Operations**: Create, Read, Update, Delete for all entities
- **RESTful API**: Clean, scalable backend architecture
- **Responsive Design**: Works seamlessly across devices
- **Automated Testing**: Jest unit tests for API endpoints
- **State Management**: React hooks for efficient state handling

## 🛠️ Tech Stack

### Frontend

- **React.js** (v19.2.3) - UI framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Chart.js** - Data visualization
- **React Icons** - Icon library
- **React Toastify** - Notifications

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing

### Testing

- **Jest** - Testing framework
- **Supertest** - HTTP assertions

## 📁 Project Structure

```
stockproject/
├── frontend/          # Marketing website
│   ├── src/
│   │   ├── home/     # Landing page
│   │   ├── signup/   # Auth pages
│   │   └── ...
│   └── package.json
│
├── dashboard/         # Trading dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── Holdings.js
│   │   │   ├── Positions.js
│   │   │   ├── Orders.js
│   │   │   ├── WatchList.js
│   │   │   ├── Summary.js
│   │   │   └── ...
│   │   └── data/
│   └── package.json
│
└── backend/           # API server
    ├── Models/
    │   ├── User.js
    │   ├── Holding.js
    │   ├── Position.js
    │   └── Order.js
    ├── index.js
    ├── api.test.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/vivekyadav-3/trading-platform-mern.git
cd trading-platform-mern
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd backend
npm install

# Install dashboard dependencies
cd ../dashboard
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Environment Setup**

Create `.env` files in each directory:

**backend/.env**

```env
PORT=3002
MONGO_URL=mongodb://localhost:27017/stockproject
TOKEN_KEY=your_secret_key_here
```

**dashboard/.env**

```env
PORT=3001
```

4. **Start MongoDB**

```bash
# Make sure MongoDB is running
mongod
```

5. **Seed the Database** (First time only)

```bash
# Navigate to http://localhost:3002/addHoldings after starting the backend
```

### Running the Application

Open **3 separate terminals**:

**Terminal 1 - Backend**

```bash
cd backend
npm start
# Runs on http://localhost:3002
```

**Terminal 2 - Dashboard**

```bash
cd dashboard
npm start
# Runs on http://localhost:3001
```

**Terminal 3 - Frontend**

```bash
cd frontend
npm start
# Runs on http://localhost:3000
```

## 🧪 Testing

Run backend tests:

```bash
cd backend
npm test
```

**Test Results:**

```
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
```

## 📊 API Endpoints

### Authentication

- `POST /signup` - Register new user
- `POST /login` - User login

### Stock Data

- `GET /allStocks` - Get live stock prices
- `GET /allHoldings` - Get user holdings
- `GET /allPositions` - Get user positions
- `GET /allOrders` - Get order history

### Trading

- `POST /newOrder` - Place buy/sell order
- `GET /addHoldings` - Seed initial data (dev only)

## 🎯 Key Features Explained

### 1. Authentication Flow

- User registers with email, username, and password
- Password is hashed using bcrypt (12 rounds)
- JWT token generated and stored in HTTP-only cookie
- Protected routes verify token before granting access

### 2. Live Stock Simulation

- Custom algorithm simulates price fluctuations (±1%)
- No external API dependencies = 100% reliability
- Prices update on each request
- Supports 15+ stocks including INFY, TCS, RELIANCE, MRF

### 3. Portfolio Management

- **Buy**: Increases quantity or creates new holding
- **Sell**: Decreases quantity or removes holding if qty = 0
- Real-time P&L calculation
- Margin tracking with visual charts

### 4. Dynamic Charts

- Fetches live holdings data
- Calculates total investment vs available margin
- Updates chart automatically on trades
- Doughnut chart with 70% cutout for modern look

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- HTTP-only cookies
- CORS configuration
- Environment variable protection
- Input validation

## 📈 Future Enhancements

- [ ] Real-time WebSocket updates
- [ ] Advanced charting (candlestick, line charts)
- [ ] Portfolio analytics dashboard
- [ ] Trade history export (CSV/PDF)
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Integration with real stock APIs
- [ ] Paper trading competitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Vivek Yadav**

- GitHub: [@vivekyadav-3](https://github.com/vivekyadav-3)

## 🙏 Acknowledgments

- Inspired by Zerodha Kite platform
- TradingView for chart widgets
- Chart.js for data visualization
- MongoDB for database solution

---

⭐ If you found this project helpful, please give it a star!
