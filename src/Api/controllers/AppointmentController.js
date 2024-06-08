import AppointmentService from '../../application/services/AppointmentService.js';

class AppointmentController {
    async getAppointmentsByUser(req, res) {
        try {
            const appointments = await AppointmentService.getAppointmentsByUserId(req.params.id);
            res.status(200).json(appointments);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async getAppointmentsByProfessional(req, res) {
        try {
            const appointments = await AppointmentService.getAppointmentsByProfessionalId(req.params.id);
            res.status(200).json(appointments);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async createAppointment(req, res) {
        try {
            const appointment = await AppointmentService.createAppointment(req.body);
            res.status(201).json(appointment);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new AppointmentController();
