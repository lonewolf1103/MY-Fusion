const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const nodemailer = require('nodemailer');

// POST /api/orders
router.post('/', async (req, res) => {
    try {
        console.log("✅ /api/orders route hit");

        // Save order to MongoDB
        const newOrder = new Order(req.body);
        await newOrder.save();
        console.log("✅ Order saved to database");

        const { fullName, email, phone, address, notes, cartItems, total, paymentMode } = req.body;

        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'myfusion826@gmail.com',
                pass: 'zyso krfw yicu sxrh' // 🔒 Replace with new app password if needed
            }
        });

        // Format item list for email
        const itemList = cartItems.map(item =>
            `<li>${item.name} x ${item.quantity} - ₹${item.price * item.quantity}</li>`
        ).join('');

        // Send email to customer
        try {
            await transporter.sendMail({
                from: '"Moonlight Store" <myfusion826@gmail.com>',
                to: email,
                subject: '🛒 Order Confirmation - Moonlight Night Lamp',
                html: `
                    <h2>Hi ${fullName}, thanks for your order!</h2>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Address:</strong> ${address}</p>
                    <p><strong>Payment Mode:</strong> ${paymentMode}</p>
                    <p><strong>Total:</strong> ₹${total}</p>
                    <h3>Items:</h3>
                    <ul>${itemList}</ul>
                    <p>We’ll contact you shortly. Feel free to reply to this email if you have questions.</p>
                `
            });
            console.log("✅ Customer email sent");
        } catch (e) {
            console.error("❌ Failed to send customer email:", e.message);
        }

        // Send email to admin (you)
        try {
            await transporter.sendMail({
                from: '"Moonlight Store" <myfusion826@gmail.com>',
                to: 'myfusion826@gmail.com',
                subject: `📦 New Order from ${fullName}`,
                html: `
                    <h2>New Order Received</h2>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Address:</strong> ${address}</p>
                    <p><strong>Payment Mode:</strong> ${paymentMode}</p>
                    <p><strong>Notes:</strong> ${notes || 'N/A'}</p>
                    <p><strong>Total:</strong> ₹${total}</p>
                    <h3>Items:</h3>
                    <ul>${itemList}</ul>
                `
            });
            console.log("✅ Admin email sent");
        } catch (e) {
            console.error("❌ Failed to send admin email:", e.message);
        }

        // Respond to frontend
        res.status(201).json({ message: "Order saved. Email process completed." });

    } catch (error) {
        console.error("❌ General order error:", error.message || error);
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
});

module.exports = router;
