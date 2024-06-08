import Test from '../models/Test.js';

class TestRepository {
    async findAll() {
        return Test.findAll();
    }

    async create(testData) {
        return Test.create(testData);
    }
}

export default new TestRepository();
