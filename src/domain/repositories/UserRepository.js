import User from '../models/User.js';

class UserRepository {
    async findByUsername(nomeDeUsuario) {
        return User.findOne({ where: { nomeDeUsuario } });
    }

    async create(userData) {
        return User.create(userData);
    }
}

export default new UserRepository();
