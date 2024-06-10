import AuthService from '../../application/services/AuthService.js';

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Operações de autenticação
 */

class AuthController {
    /**
     * @swagger
     * /api/auth/register:
     *   post:
     *     summary: Registrar um novo usuário
     *     tags: [Autenticação]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nomeDeUsuario:
     *                 type: string
     *               senha:
     *                 type: string
     *               papel:
     *                 type: string
     *     responses:
     *       201:
     *         description: Usuário registrado com sucesso
     *       400:
     *         description: Erro ao registrar usuário
     */
    async register(req, res) {
        const { nomeDeUsuario, senha, papel } = req.body;
        try {
            const token = await AuthService.register(nomeDeUsuario, senha, papel);
            res.status(201).json({ token });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    /**
     * @swagger
     * /api/auth/login:
     *   post:
     *     summary: Fazer login
     *     tags: [Autenticação]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nomeDeUsuario:
     *                 type: string
     *               senha:
     *                 type: string
     *     responses:
     *       200:
     *         description: Login bem-sucedido
     *       400:
     *         description: Credenciais inválidas
     */
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

