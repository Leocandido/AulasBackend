const Produto = require('../models/Produto');

module.exports = {

    async index(req, res) {
        const produtos = await Produto.find().sort({createdAt: 'desc'})

        return res.json(produtos)
    },

    async store(req, res) {
        const { titulo, desc, preco } = req.body

        if (!titulo || !desc || !preco) {
            return res.json({msg: 'Filho de uma puta, digita essa merda direito'})
        }

        const produto = await Produto.create({titulo, desc, preco})

        return res.json(produto)
    },

    async update(req, res) {
        const { id } = req.params;

        const produto = await Produto.findByIdAndUpdate(id, req.body, { new: true });

        return res.json(produto)
    },
    
    async destroy(req, res) {
        const { id } = req.params;

        const produto = await Produto.findByIdAndDelete(id);

        return res.json({ msg: 'Produto retirado do carrinho' });
    }
}