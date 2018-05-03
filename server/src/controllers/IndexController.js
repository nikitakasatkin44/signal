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

    async productById(req, res) {
        try {
            const vestId = parseInt(req.params.id)

            const product = await Vest.findById(vestId)

            // const product = await Vest.findAll({
            //     where: {id: vestId},
            //     include: [
            //         {
            //             all: true
            //         }
            //     ],
            //     order: [
            //         ['createdAt', 'DESC']
            //     ]
            // })
                res.send(product)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'Ошибка при вызове метода productById'
            })
        }
    },

    // async productById(req, res) {
    //     try {
    //         const vestID = req.params.vestID || 1;
    //         Vest.findOne({ vestID: parseInt(vestID) })
    //             .exec((err, file) => {
    //             if (err || !file) {
    //                 if (!err) {err = {}}
    //                 err.error_text = 'Ошибка при вызове метода productById';
    //                 return next(err);
    //             }
    //             res.json({ vest: file })
    //             })
    //     } catch (err) {
    //         console.log('Ошибка при вызове метода productById')
    //     }
    // },

    index5(req, res) {
        res.send({
            message: 'myMessage123',
            name: 'Nick'
        })
    }
};