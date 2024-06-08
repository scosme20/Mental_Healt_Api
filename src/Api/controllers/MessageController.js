import MessageService from '../../application/services/MessageService.js';

class MessageController {
    async getMessagesBySender(req, res) {
        try {
            const messages = await MessageService.getMessagesBySenderId(req.params.id);
            res.status(200).json(messages);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async getMessagesByReceiver(req, res) {
        try {
            const messages = await MessageService.getMessagesByReceiverId(req.params.id);
            res.status(200).json(messages);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async createMessage(req, res) {
        try {
            const message = await MessageService.createMessage(req.body);
            res.status(201).json(message);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new MessageController();
