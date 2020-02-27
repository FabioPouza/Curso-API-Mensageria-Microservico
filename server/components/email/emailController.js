const emailService = require('./emailService')

module.exports = {
    async sendEmail(req, res) {
        try {
            await emailService.sendEmail(req.body.data);
            res.status(200).json('Foi enviado um email para voce como recibo de cadastro');

        } catch (error) {
            res.status(500).json(error);
        }
    }
}
