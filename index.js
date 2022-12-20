const nodemailer = require('nodemailer');

const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const email_address = core.getInput('username');
  const email_password = core.getInput('password')
  const recipient_address = code.getInput('to')
  const subject = core.getInput('subject')
  const body = core.getInput('body')

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