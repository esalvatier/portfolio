const db = require("../models");
const nodemailer = require("nodemailer");

module.exports = {
    message: function(req, res) {
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
                text: `${dbModel.name} said: ${dbModel.content}\nTheir email is: ${dbModel.from}`
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
    },
    request: function(req, res) {
      let newReq = {
        from: "Me",
        to: req.body.email,
        reason: "Resume Request",
        content: "My Resume"
      };
      db.Message
      .create(newReq)
      .then(dbModel => {
          let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'mark.e.salvatier@gmail.com',
                pass: 'notasecurepassword'
              }
            });
             
             
            let mailOptions = {
              from: 'mark.e.Salvatier@gmail.com',
              to: req.body.email,
              subject: dbModel.reason,
              attachments: [{
                filename: "Mark Salvatier - Resume.pdf",
                path: "./assets/files/resume/Resume.pdf"
              }]
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