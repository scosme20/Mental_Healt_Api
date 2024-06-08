import UserRepository from '../../domain/repositories/UserRepository.js';

class UserService {
    async getUserById(id) {
        return UserRepository.findById(id);
    }

    async updateUser(id, updateData) {
        return UserRepository.update(id, updateData);
    }
}

export default new UserService();
