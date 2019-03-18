const db = require("../models");
const nodemailer = require("nodemailer");

module.exports = {
    create: function(req, res) {
        db.Message
        .create(req.body)
        .then(dbModel => {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'Mark.E.Salvatier@gmail.com',
                  pass: 'YESYESYES'
                }
              });
               
               
              let mailOptions = {
                from: 'Mark.E.Salvatier@gmail.com',
                to: "m.erik.salvatier@gmail.com",
                subject: dbModel.reason,
                text: `${dbModel.name} says: ${dbModel.content}/n Their email is: ${dbModel.from}`
              };
               
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  res.json(dbModels)
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            })
        .catch(err => res.status(422).json(err));
    }
};