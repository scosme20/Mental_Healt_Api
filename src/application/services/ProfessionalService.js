import UserRepository from '../../domain/repositories/UserRepository.js';

class ProfessionalService {
    async getProfessionalById(id) {
        return UserRepository.findById(id);
    }

    async updateProfessional(id, updateData) {
        return UserRepository.update(id, updateData);
    }
}

export default new ProfessionalService();
