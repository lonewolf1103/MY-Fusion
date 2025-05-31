const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    address: String,
    notes: String,
    paymentMode: String,
    cartItems: [
        {
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    total: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);
