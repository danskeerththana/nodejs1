var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:
    user: 'dans keerththana',
    pass: '**************'
  }
});

var mailOptions = {
  from: '',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',

};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
