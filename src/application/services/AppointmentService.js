import AppointmentRepository from '../../domain/repositories/AppointmentRepository.js';

class AppointmentService {
    async getAppointmentsByUserId(idUsuario) {
        return AppointmentRepository.findByUserId(idUsuario);
    }

    async getAppointmentsByProfessionalId(idProfissional) {
        return AppointmentRepository.findByProfessionalId(idProfissional);
    }

    async createAppointment(appointmentData) {
        return AppointmentRepository.create(appointmentData);
    }
}

export default new AppointmentService();
