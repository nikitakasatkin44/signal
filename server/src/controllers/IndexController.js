const {Vest} = require('../models');

module.exports = {
    async index (req, res) {
        try {
            let vests = null;
            vests = await Vest.findAll({
                limit: 20
            });
            res.send(vests)

    } catch (err) {
            res.status(500).send({
                error: 'Ошибка при получении списка жилетов'
            })
        }
    },

    index5(req, res) {
        res.send({
            message: 'myMessage123',
            name: 'Nick'
        })
    }
};