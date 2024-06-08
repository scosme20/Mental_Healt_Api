import ResourceRepository from '../../domain/repositories/ResourceRepository.js';

class ResourceService {
    async getAllResources() {
        return ResourceRepository.findAll();
    }

    async createResource(resourceData) {
        return ResourceRepository.create(resourceData);
    }
}

export default new ResourceService();
