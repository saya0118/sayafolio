const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const cors = require("cors")({ origin: true });

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.REACT_APP_OWNER_MAIL,
    pass: process.env.REACT_APP_OWNER_PASS,
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  console.log(
    "from sendEmail function. The request object is:",
    JSON.stringify(req.body)
  );

  cors(req, res, () => {
    const email = req.body.data.email;
    const name = req.body.data.name;
    const message = req.body.data.message;

    const mailOptions = {
      from: email,
      to: "chemi0802@gmail.com",
      subject: "New message from sayafolio",
      text: `${name} says: ${message}`,
    };
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: "sent",
        },
      });
    });
  });
});
