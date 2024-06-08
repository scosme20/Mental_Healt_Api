import TipService from '../../application/services/TipService.js';

class TipController {
    async getAllTips(req, res) {
        try {
            const tips = await TipService.getAllTips();
            res.status(200).json(tips);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async createTip(req, res) {
        try {
            const tip = await TipService.createTip(req.body);
            res.status(201).json(tip);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new TipController();
