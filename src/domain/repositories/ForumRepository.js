import Forum from '../models/Forum.js';

class ForumRepository {
    async findByUserId(idUsuario) {
        return Forum.findAll({ where: { idUsuario } });
    }

    async create(forumData) {
        return Forum.create(forumData);
    }
}

export default new ForumRepository();
