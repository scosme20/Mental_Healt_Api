/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Operações de autenticação
 */

class AuthService {
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
    async register(nomeDeUsuario, senha, papel) {
        // Lógica para registrar um novo usuário
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
    async login(nomeDeUsuario, senha) {
        // Lógica para fazer login
    }
}

export default new AuthService();
