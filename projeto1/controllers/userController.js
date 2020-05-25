const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { email, nickname, password } = req.body;

        const user = await User.create({ email, nickname, password });

        return res.json(user);
    },

    async signIn(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            res.status(404).json({ msg: "Usuário não encontrado" })
        }

        if (!(await user.compareHash(password))) {
            res.status(404).json({ msg: "Senha não encontrada" })
        }

        const { id } = user

        const token = await User.generateToken(id)

        return res.json({
            session: token,
            user: user
        })
    }

}