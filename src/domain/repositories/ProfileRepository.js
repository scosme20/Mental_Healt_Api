import Profile from '../models/Profile.js';

class ProfileRepository {
    async findByUserId(idUsuario) {
        return Profile.findOne({ where: { idUsuario } });
    }

    async create(profileData) {
        return Profile.create(profileData);
    }
}

export default new ProfileRepository();
