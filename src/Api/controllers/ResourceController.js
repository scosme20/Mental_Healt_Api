import ResourceService from '../../application/services/ResourceService.js';

class ResourceController {
    async getAllResources(req, res) {
        try {
            const resources = await ResourceService.getAllResources();
            res.status(200).json(resources);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async createResource(req, res) {
        try {
            const resource = await ResourceService.createResource(req.body);
            res.status(201).json(resource);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new ResourceController();
