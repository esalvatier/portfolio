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
                  user: 'mark.e.salvatier@gmail.com',
                  pass: 'notasecurepassword'
                }
              });
               
               
              let mailOptions = {
                from: 'Mark.E.Salvatier@gmail.com',
                to: "m.erik.salvatier@gmail.com",
                subject: dbModel.reason,
                html: `${dbModel.name} says: ${dbModel.content}/n Their email is: ${dbModel.from}`
              };
               
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  res.status(404).end()
                } else {
                  console.log('Email sent: ' + info.response);
                  res.status(200).end()
                }
              });
            })
        .catch(err => res.status(422).json(err));
    }
};