require("dotenv").config({});
const client = require("@sendgrid/mail");
client.setApiKey(process.env.SENDGRID_APIKEY);
console.log(process.env.SENDGRID_APIKEY);

const sendMessage = () => {};

class Email {
  constructor(user, url) {
    this.email = user.email;
    this.name = user.name;
    this.url = url;
  }
  sendMessage(template, message) {
    const msg = {
      to: this.email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: message,
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    client.send(msg);
  }
}

module.exports = Email;
