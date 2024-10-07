import { app } from "../app.js";
import request from "supertest";
import { User } from "../Models/user.models.js";

jest.mock("../Models/user.models.js");

describe('Testes da rota /api/user/all', () => {

    test('deve retornar todos os usuários com status 200', async () => {
        const mockUsersResponse = [{ id: 1, name: "John Doe" }];
        User.findAll.mockResolvedValue(mockUsersResponse);
        const resposta = await request(app).get("/api/user/all");
        expect(resposta.status).toBe(200);
        expect(resposta.body).toEqual(mockUsersResponse);
    });

    test('deve retornar erro 500 ao falhar na busca de usuários', async () => {
        User.findAll.mockRejectedValue(new Error("Erro no servidor"));
        const resposta = await request(app).get("/api/user/all");
        expect(resposta.status).toBe(500);
        expect(resposta.body).toHaveProperty('error', "Não foi possivel encontrar os usuários");
    });
});

describe('Testes da rota POST /api/user', () => {

    test('deve criar um novo usuário e retornar status 201', async () => {
        const novoUser = { name: "Jane Doe", email: "jane@example.com" };
        User.create.mockResolvedValue(novoUser);
        
        const resposta = await request(app)
            .post("/user/new")
            .send(novoUser);

        expect(resposta.status).toBe(201);
        expect(resposta.body).toHaveProperty('message', "User criado com sucesso");
        expect(resposta.body.novoUser).toEqual(novoUser);
    });

    test('deve retornar erro 500 ao falhar na criação de usuário', async () => {
        User.create.mockRejectedValue(new Error("Erro no servidor"));
        const novoUser = { name: "Jane Doe", email: "jane@example.com" };

        const resposta = await request(app)
            .post("/api/user")
            .send(novoUser);

        expect(resposta.status).toBe(500);
        expect(resposta.body).toHaveProperty('error', "Não foi possível criar um Usuario");
    });
});


describe('Testes da rota GET /api/user/:id', () => {

    test('deve retornar um usuário por ID com status 200', async () => {
        const mockUser = { id: 1, name: "John Doe" };
        User.findByPk.mockResolvedValue(mockUser);

        const resposta = await request(app).get("/api/user/1");
        expect(resposta.status).toBe(200);
        expect(resposta.body).toEqual(mockUser);
    });

    test('deve retornar erro 404 quando o usuário não for encontrado', async () => {
        User.findByPk.mockResolvedValue(null);

        const resposta = await request(app).get("/api/user/999");
        expect(resposta.status).toBe(404);
        expect(resposta.body).toHaveProperty('error', expect.any(String));
    });
});

describe('Testes da rota DELETE /api/user/:id', () => {

    test('deve deletar um usuário por ID com status 204', async () => {
        const mockUser = { id: 1, destroy: jest.fn() };
        User.findByPk.mockResolvedValue(mockUser);

        const resposta = await request(app).delete("/api/user/1");
        expect(resposta.status).toBe(204);
        expect(mockUser.destroy).toHaveBeenCalled();
    });

    test('deve retornar erro 404 quando o usuário não for encontrado', async () => {
        User.findByPk.mockResolvedValue(null);

        const resposta = await request(app).delete("/api/user/999");
        expect(resposta.status).toBe(404);
        expect(resposta.body).toBe("Not found");
    });
});

describe('Testes da rota PUT /api/user/:id', () => {

    test('deve atualizar um usuário com sucesso e retornar status 201', async () => {
        const mockUser = { id: 1, update: jest.fn().mockResolvedValue({ id: 1, name: "John Updated" }) };
        User.findByPk.mockResolvedValue(mockUser);

        const updatedUser = { name: "John Updated" };
        const resposta = await request(app)
            .put("/api/user/1")
            .send(updatedUser);

        expect(resposta.status).toBe(201);
        expect(resposta.body).toHaveProperty('message', "Usuário criado com suceso");
        expect(mockUser.update).toHaveBeenCalledWith(updatedUser);
    });

    test('deve retornar erro 404 quando o usuário não for encontrado', async () => {
        User.findByPk.mockResolvedValue(null);

        const resposta = await request(app).put("/api/user/999").send({ name: "Novo Nome" });
        expect(resposta.status).toBe(404);
        expect(resposta.body).toHaveProperty('error', "Not found");
    });
});
