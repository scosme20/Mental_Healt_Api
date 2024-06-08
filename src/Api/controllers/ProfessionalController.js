import ProfessionalService from '../../application/services/ProfessionalService.js';

class ProfessionalController {
    async getProfessional(req, res) {
        try {
            const professional = await ProfessionalService.getProfessionalById(req.params.id);
            res.status(200).json(professional);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async updateProfessional(req, res) {
        try {
            const professional = await ProfessionalService.updateProfessional(req.params.id, req.body);
            res.status(200).json(professional);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new ProfessionalController();
