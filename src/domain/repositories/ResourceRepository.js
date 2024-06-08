import Resource from '../models/Resource.js';

class ResourceRepository {
    async findAll() {
        return Resource.findAll();
    }

    async create(resourceData) {
        return Resource.create(resourceData);
    }
}

export default new ResourceRepository();
