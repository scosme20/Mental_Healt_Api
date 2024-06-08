import AuthService from '../../application/services/AuthService.js';

class AuthController {
    async register(req, res) {
        const { nomeDeUsuario, senha, papel } = req.body;
        try {
            const token = await AuthService.register(nomeDeUsuario, senha, papel);
            res.status(201).json({ token });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async login(req, res) {
        const { nomeDeUsuario, senha } = req.body;
        try {
            const token = await AuthService.login(nomeDeUsuario, senha);
            res.status(200).json({ token });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new AuthController();
