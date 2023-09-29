const express = require("express");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const postRoute = express.Router();

postRoute.post("/", async (req, res) => {
  const transporter1 = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
      user: "deapth.search.it@gmail.com",
      pass: "bbtzouxqqbejsmfa",
    },
  });
  const mailOptions1 = {
    from: "deapth.search.it@gmail.com",
    to: req.body.email,
    subject: req.body.subject,
    text: "Depth Search Team",
    html: `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Email Template</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-50">
          <h1>Hello MR. ${req.body.name}</h1>

          <p> ${req.body.message} </p>
          <br/>
          <br/>
          <br/>
          <p>Thanks </p>
          <p>Depth Search Team</p>
        </body>
      </html>
        `,
  };
  transporter1.sendMail(mailOptions1, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

module.exports = postRoute;
