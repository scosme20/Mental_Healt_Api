import Message from '../models/Message.js';

class MessageRepository {
    async findBySenderId(idRemetente) {
        return Message.findAll({ where: { idRemetente } });
    }

    async findByReceiverId(idDestinatário) {
        return Message.findAll({ where: { idDestinatário } });
    }

    async create(messageData) {
        return Message.create(messageData);
    }
}

export default new MessageRepository();
