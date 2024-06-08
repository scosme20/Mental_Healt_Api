import MessageRepository from '../../domain/repositories/MessageRepository.js';

class MessageService {
    async getMessagesBySenderId(idRemetente) {
        return MessageRepository.findBySenderId(idRemetente);
    }

    async getMessagesByReceiverId(idDestinatário) {
        return MessageRepository.findByReceiverId(idDestinatário);
    }

    async createMessage(messageData) {
        return MessageRepository.create(messageData);
    }
}

export default new MessageService();
