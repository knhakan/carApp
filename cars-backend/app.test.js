const request = require('supertest');
const app = require('./app');

const user1 = { 'username': 'admin', 'password': '123123' };

it('login - positive test', async () => {
    const response = await request(app).post("/auth/login").send(user1);
    expect(response.statusCode).toBe(200);
});

const user2 = { 'username': 'admin2', 'password': '123123' };

it('login - negative test - 1', async () => {
    const response = await request(app).post("/auth/login").send(user2);
    expect(response.statusCode).toBe(404);
});


it('login - negative test - 2', async () => {
    const response = await request(app).post("/auth/login").send();
    expect(response.statusCode).toBe(400);
});

