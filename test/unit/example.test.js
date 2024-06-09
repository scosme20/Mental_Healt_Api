import AuthService from '../../src/application/services/AuthService.js';

describe('AuthService', () => {
    it('should register a new user', async () => {
        const token = await AuthService.register('user123', 'password', 'user');
        expect(token).toBeDefined();
    });

    it('should not register an existing user', async () => {
        await AuthService.register('user123', 'password', 'user');
        await expect(AuthService.register('user123', 'password', 'user')).rejects.toThrow('Usuário já existe');
    });
});
