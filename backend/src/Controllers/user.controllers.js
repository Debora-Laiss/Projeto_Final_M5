import { request, response } from "express";
import { User } from "../Models/user.models.js";

export const getAllUser = async (req,res) =>{
    try {
        const users = await User.findAll() 
        res.status(200).send(users);
    } catch {
        res.status(500).send({
            error: "Não foi possivel encontrar os usuários",
        });
    }
};

export const createNewUser = async (req, res) => {

    try {
        const newUser = req.body;
        const userCriado = await User.create(newUser);
        res.status(201).send({
            message: "User criado com sucesso",
            novoUser: userCriado,
        })
    } catch {
        res.status(500).send({ error: "Não foi possível criar um Usuario" });
    }
};


export const getUserById = async (req, res) => {

    try {
        const idParametro = req.params.id
        const userEncontrado = await User.findByPk(idParametro)
        res.status(200).send(userEncontrado); 
    } catch {
        res.status(404).send({ error: e.message }); 
    }
};

export const deleteUserById = async (req, res) =>{
    let idParametro = req.params.id;

	try {
		let userParaDeletar = await User.findByPk(idParametro)

		if (!userParaDeletar) {
      throw new Error("Not found");
    }

		await userParaDeletar.destroy()

		response.status(204).send();
	} catch (e) {
		res.status(404).send(e.message);
	}
}


export const updateUserById = async (req, res) => {
    const idParametro = req.params.id; // Corrigido de 'request' para 'req'

    try {
        const userDaRequest = req.body;
        const userParaAtualizar = await User.findByPk(idParametro);

        if (!userParaAtualizar) {
            throw new Error("Not found");
        }

        // Atualizo o usuário com o método update
        const userAtualizado = await userParaAtualizar.update(userDaRequest);

        res.status(200).send({ // Mudado para 200 para atualizações bem-sucedidas
            message: "Usuário atualizado com sucesso", // Corrigido a mensagem
            userAtualizado,
        });
    } catch (e) {
        res.status(404).send({
            error: e.message,
        });
    }
};
