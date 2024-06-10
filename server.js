import express from 'express';
import sequelize from './config/database.js';
import swaggerRouter from './swagger.js';
import authRoutes from './src/api/routes/AuthRoutes.js';
import userRoutes from './src/api/routes/UserRoutes.js';
import professionalRoutes from './src/api/routes/ProfessionalRoutes.js';
import appointmentRoutes from './src/api/routes/AppointmentRoutes.js';
import forumRoutes from './src/api/routes/ForumRoutes.js';
import resourceRoutes from './src/api/routes/ResourceRoutes.js';
import testRoutes from './src/api/routes/TestRoutes.js';
import tipRoutes from './src/api/routes/TipRoutes.js';
import messageRoutes from './src/api/routes/MessageRoutes.js';
import { PORT } from './config/env.js';
import logger from './src/utils/logger.js';
import './src/infrastructure/events/eventBus.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/professional', professionalRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/resource', resourceRoutes);
app.use('/api/test', testRoutes);
app.use('/api/tip', tipRoutes);
app.use('/api/message', messageRoutes);


app.use(swaggerRouter);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();

        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

if (process.env.NODE_ENV !== 'test') {
    startServer();
}

export default app;


