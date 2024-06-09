import request from 'supertest';
import app from '../../server.js';

describe('Auth Routes', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                nomeDeUsuario: 'user123',
                senha: 'password',
                papel: 'user'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('token');
    });

    it('should not register an existing user', async () => {
        await request(app)
            .post('/api/auth/register')
            .send({
                nomeDeUsuario: 'user123',
                senha: 'password',
                papel: 'user'
            });

        const res = await request(app)
            .post('/api/auth/register')
            .send({
                nomeDeUsuario: 'user123',
                senha: 'password',
                papel: 'user'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message', 'Usuário já existe');
    });
});
