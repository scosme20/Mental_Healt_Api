import ForumRepository from '../../domain/repositories/ForumRepository.js';

class ForumService {
    async getForumsByUserId(idUsuario) {
        return ForumRepository.findByUserId(idUsuario);
    }

    async createForum(forumData) {
        return ForumRepository.create(forumData);
    }
}

export default new ForumService();
