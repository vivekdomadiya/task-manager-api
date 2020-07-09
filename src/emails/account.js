const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: "rc1199543@gmail.com",
    subject: "Thank you for join in!",
    text: `Welcome to the app, ${name}. Let me know how you along with the app.`,
  };
  sgMail.send(msg);
};

const sendCanclationEmail = (email, name) => {
  const msg = {
    to: email,
    from: "rc1199543@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  };
  sgMail.send(msg);
};

module.exports = {
  sendWelcomeEmail,
  sendCanclationEmail,
};
