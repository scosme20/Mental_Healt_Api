import TestService from '../../application/services/TestService.js';

class TestController {
    async getAllTests(req, res) {
        try {
            const tests = await TestService.getAllTests();
            res.status(200).json(tests);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async createTest(req, res) {
        try {
            const test = await TestService.createTest(req.body);
            res.status(201).json(test);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new TestController();
