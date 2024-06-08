import TestRepository from '../../domain/repositories/TestRepository.js';

class TestService {
    async getAllTests() {
        return TestRepository.findAll();
    }

    async createTest(testData) {
        return TestRepository.create(testData);
    }
}

export default new TestService();
