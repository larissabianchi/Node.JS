const postmarkMail = require('postmark')

const client = new postmarkMail.ServerClient(process.env.POSTMARK_API_KEY)

const sendWelcomeEmail = (email, name) => {
    client.sendEmail({
        'From': 'larissa.bianchi@fatec.sp.gov.br',
        'To': email,
        'Subject': 'Thanks for joining us!',
        'TextBody': `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    client.sendEmail({
        'From': 'larissa.bianchi@fatec.sp.gov.br',
        'To': email,
        'Subject': 'Come back soon!',
        'TextBody': `Hello, ${name}. Could you please tell us why you are living this app?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}