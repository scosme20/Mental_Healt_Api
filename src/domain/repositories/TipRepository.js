import Tip from '../models/Tip.js';

class TipRepository {
    async findAll() {
        return Tip.findAll();
    }

    async create(tipData) {
        return Tip.create(tipData);
    }
}

export default new TipRepository();
