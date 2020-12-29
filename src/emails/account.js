const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "nazar.tyagi.shah000@gmail.com",
    subject: "Thanks for joining in",
    text: `Welocme to the app, ${name}. Let me know how u doin with the app`,
  });
};
const sendcancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "nazar.tyagi.shah000@gmail.com",
    subject: "Sorry! to see u go!",
    text: `Goodbye, ${name}, hope to see u back sometime soon!`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendcancelationEmail,
};
