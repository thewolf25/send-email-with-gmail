const nodemailer = require('nodemailer');

const core = require('@actions/core');
const github = require('@actions/github');
let email_address = ''
let email_password =''
let recipient_address =''
let subject =''
let body=''
try {
  // `who-to-greet` input defined in action metadata file
   email_address = core.getInput('username');
   email_password = core.getInput('password')
   recipient_address = code.getInput('to')
   subject = core.getInput('subject')
   body = core.getInput('body')

} catch (error) {
  core.setFailed(error.message);
}




const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email_address,
    pass: email_password,
  },
});


transporter.sendMail({
  from: email_address, // sender address
  to: recipient_address , // list of receivers
  subject: subject, // Subject line
  text: body, // plain text body
  html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
}).then(info => {
  console.log({info});
}).catch((error)=>{
    core.setFailed(error.message)
});