const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'ndanji@foonda.co',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'ndanji@foonda.co',
        subject: 'Sad to see you go :(',
        text: `Hi ${name}, we see you have chosen to end things with us and that is fine, can you give us feedback to find out why?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}