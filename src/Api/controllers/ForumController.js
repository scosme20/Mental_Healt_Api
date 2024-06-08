import ForumService from '../../application/services/ForumService.js';

class ForumController {
    async getForumsByUser(req, res) {
        try {
            const forums = await ForumService.getForumsByUserId(req.params.id);
            res.status(200).json(forums);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async createForum(req, res) {
        try {
            const forum = await ForumService.createForum(req.body);
            res.status(201).json(forum);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new ForumController();
