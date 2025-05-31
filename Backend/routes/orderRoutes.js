const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const nodemailer = require('nodemailer');


// POST /api/orders
router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();

        // send confirmation mail 

        const {fullName,email,phone,address,notes,cartItems,total,paymentMode} = req.body

        // configure nodemailer

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: 'myfusion826@gmail.com',
                pass: 'zyso krfw yicu sxrh'
            }
        });

          const emailContent = `
            <h2>Hi ${fullName}, thanks for your order!</h2>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Payment Mode:</strong> ${paymentMode}</p>
            <p><strong>Total:</strong> ₹${total}</p>
            <h3>Items:</h3>
            <ul>
                ${cartItems.map(item => `<li>${item.name} x ${item.quantity} - ₹${item.price * item.quantity}</li>`).join('')}
            </ul>
            <p>We’ll contact you shortly. Feel free to reply to this email if you have questions.</p>
        `;

        await transporter.sendMail({
            from: 'your.email@gmail.com',
            to: email,
            subject: '🛒 Order Confirmation - Moonlight Night Lamp',
            html: emailContent
        });


        res.status(201).json({ message: "Order saved successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

module.exports = router;
