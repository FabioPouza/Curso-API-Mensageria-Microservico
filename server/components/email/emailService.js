const mailer = require('../../config/mailer/mailer');
const emailDao = require('./emailDao');

module.exports = {
    async sendEmail(content) {
        try {
            let info = await mailer.sendMail({
                from: '"Curso" <fa-pouzada@hotmail.com>', // sender address
                to: "fa-pouza@hotmail.com", // list of receivers
                subject: "User", // Subject line
                text: `O usuario ${content} foi cadastrado com sucesso!`, // plain text body
            });
        } catch (error) {
            throw error;
        }
    }
}