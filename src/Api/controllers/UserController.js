import UserService from '../../application/services/UserService.js';

class UserController {
    async getUser(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            res.status(200).json(user);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new UserController();
