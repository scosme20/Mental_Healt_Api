import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';

const router = Router();

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Aplicação de Saúde Mental',
            version: '1.0.0',
            description: 'API para ajudar pessoas com problemas emocionais e mentais',
        },
        servers: [
            {
                url: 'http://localhost:5955', 
            },
        ],
    },
    apis: ['./src/api/routes/*.js', './src/api/controllers/*.js'], 
};

const specs = swaggerJsdoc(options);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default router;
