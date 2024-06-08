import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserRepository from '../../domain/repositories/UserRepository.js';
import { JWT_SECRET } from '../../../config/env.js';

class AuthService {
    async register(nomeDeUsuario, senha, papel) {
        let user = await UserRepository.findByUsername(nomeDeUsuario);
        if (user) {
            throw new Error('Usuário já existe');
        }

        const hashedPassword = await bcrypt.hash(senha, 10);
        user = await UserRepository.create({ nomeDeUsuario, senha: hashedPassword, papel });

        const payload = { userId: user.id, papel: user.papel };
        return jwt.sign(payload, JWT_SECRET, { expiresIn: '5h' });
    }

    async login(nomeDeUsuario, senha) {
        const user = await UserRepository.findByUsername(nomeDeUsuario);
        if (!user || !await bcrypt.compare(senha, user.senha)) {
            throw new Error('Credenciais inválidas');
        }

        const payload = { userId: user.id, papel: user.papel };
        return jwt.sign(payload, JWT_SECRET, { expiresIn: '5h' });
    }
}

export default new AuthService();
