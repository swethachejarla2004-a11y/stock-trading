const { model, Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
}, { timestamps: true });

module.exports = model("Order", OrdersSchema);
