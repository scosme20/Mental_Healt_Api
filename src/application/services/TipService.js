import TipRepository from '../../domain/repositories/TipRepository.js';

class TipService {
    async getAllTips() {
        return TipRepository.findAll();
    }

    async createTip(tipData) {
        return TipRepository.create(tipData);
    }
}

export default new TipService();
