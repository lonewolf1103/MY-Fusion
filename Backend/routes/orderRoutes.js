const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const nodemailer = require('nodemailer');

// POST /api/orders
router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();

        const { fullName, email, phone, address, notes, cartItems, total, paymentMode } = req.body;

        // ✅ Nodemailer config
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'myfusion826@gmail.com',
                pass: 'zyso krfw yicu sxrh' // App password
            }
        });

        // ✅ Format item list
        const itemList = cartItems.map(item =>
            `<li>${item.name} x ${item.quantity} - ₹${item.price * item.quantity}</li>`
        ).join('');

        // ✅ Email to customer
        const customerMail = {
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
        };

        // ✅ Email to yourself (admin)
        const adminMail = {
            from: '"Moonlight Store" <myfusion826@gmail.com>',
            to: 'myfusion826@gmail.com', // Your email
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
        };

        // ✅ Send both emails
        await transporter.sendMail(customerMail);
        await transporter.sendMail(adminMail);

        res.status(201).json({ message: "Order saved and emails sent successfully!" });

    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

module.exports = router;
