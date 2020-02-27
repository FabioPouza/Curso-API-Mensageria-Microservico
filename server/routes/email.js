const emailController = require('../components/email/emailController');

module.exports = (app) => {
    app.route('/v1/emails')
        .post(emailController.sendEmail);
}