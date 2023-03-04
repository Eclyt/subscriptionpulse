
var userService = require('../service/user.service');
const nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'keshaun.senger@ethereal.email',
        pass: 'QWmG4ZtquPYaUnmzfV'
    }
});
exports.contactUs = async (data) => {
    try {

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: data.email, // list of receivers
            to: '"Fred Foo 👻" <no-reply@subscriptionpulse.com>', // sender address
            subject: "Inquiry about [Product/Service/Topic] ✔", // Subject line
            text: "Dear [Subscriptionpulse] ," +data.message, // plain text body
            html: "<p>I am writing to inquire about [product/service/topic]. I came across your website and was impressed by the [feature/benefit] that your [product/service] provides.</p><p>I have a few questions about [product/service/topic], and I was hoping that you could provide some more information. Specifically, I am interested in learning more about [specific question or concern].</p>Could you please let me know the answers to these questions? Additionally, if there is any additional information that you think would be helpful for me to know, please feel free to include it in your response.</p>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return {
            status: 1,
            response: data,
            message: "success !!",
        };

    } catch (error) {
        return {
            status: -1,
            message: error.message,

        };
    }
}
exports.askForQuote = async (data) => {
    try {
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: data.email, // list of receivers
            to: '"Fred Foo 👻" <no-reply@subscriptionpulse.com>', // sender address
            subject: "Inquiry about [Product/Service/Topic] ✔", // Subject line
            text: "Dear [Subscriptionpulse] ," +data.message, // plain text body
            html: "<p>I am writing to inquire about [product/service/topic]. I came across your website and was impressed by the [feature/benefit] that your [product/service] provides.</p><p>I have a few questions about [product/service/topic], and I was hoping that you could provide some more information. Specifically, I am interested in learning more about [specific question or concern].</p>Could you please let me know the answers to these questions? Additionally, if there is any additional information that you think would be helpful for me to know, please feel free to include it in your response.</p>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        let dataToSend={}
        dataToSend=data;
        dataToSend.messageId=info.messageId;
        dataToSend.message_url=nodemailer.getTestMessageUrl(info);
        return {
            status: 1,
            response: dataToSend,
            message: "success !!",
        };
    } catch (error) {
        return {
            status: -1,
            message: error.message,

        };
    }
}
exports.subscribeNewLetter = async (data) => {
    try {
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: data.email, // list of receivers
            to: '"Fred Foo 👻" <no-reply@subscriptionpulse.com>', // sender address
            subject: "Subscribe about [Product/Service/Topic] ✔", // Subject line
            text: "Dear [Subscriptionpulse] ,", // plain text body
            html: "I subscribed your new letter", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        let dataToSend={}
        dataToSend=data;
        dataToSend.messageId=info.messageId;
        dataToSend.message_url=nodemailer.getTestMessageUrl(info);
        return {
            status: 1,
            response: dataToSend,
            message: "success !!",
        };
    } catch (error) {
        return {
            status: -1,
            message: error.message,

        };
    }
}