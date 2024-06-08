import Appointment from '../models/Appointment.js';

class AppointmentRepository {
    async findByUserId(idUsuario) {
        return Appointment.findAll({ where: { idUsuario } });
    }

    async findByProfessionalId(idProfissional) {
        return Appointment.findAll({ where: { idProfissional } });
    }

    async create(appointmentData) {
        return Appointment.create(appointmentData);
    }
}

export default new AppointmentRepository();
