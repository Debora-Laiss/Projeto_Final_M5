import { goals } from "../DataBase/goals.database.js";
import { Goal } from "../Models/goals.model.js";

export const getAllGoals = (request, response) => {
    response.status(200).send(goals);
};

export const createGoal = (request, response) => {
    try {
        const newGoal = request.body;

        const goalCriado = new Goal(
            goals.length + 1, 
            newGoal.title,
            newGoal.description,
            newGoal.completed || false
        );

        goals.push(goalCriado);

        response.status(201).send({
            message: "Meta criada com sucesso",
            novaMeta: goalCriado,
        });
    } catch {
        response.status(500).send({ error: "Não foi possível criar a meta" });
    }
};

export const getGoalById = (request, response) => {
    try {
        const idParametro = parseInt(request.params.id, 10);
        const goalEncontrada = goals.find(g => g.id === idParametro);

        if (!goalEncontrada) {
            throw new Error("Meta não encontrada");
        }

        response.status(200).send(goalEncontrada);
    } catch (e) {
        response.status(404).send({
            error: e.message,
        });
    }
};

export const deleteGoalById = (request, response) => {
    try {
        const idParametro = parseInt(request.params.id, 10);
        const index = goals.findIndex(g => g.id === idParametro);

        if (index === -1) {
            throw new Error("Meta não encontrada");
        }

        goals.splice(index, 1);
        response.status(204).send();
    } catch (e) {
        response.status(404).send(e.message);
    }
};

export const updateGoalById = (request, response) => {
    try {
        const idParametro = parseInt(request.params.id, 10);
        const goalDaRequest = request.body;

        const goalParaAtualizar = goals.find(g => g.id === idParametro);

        if (!goalParaAtualizar) {
            throw new Error("Meta não encontrada");
        }

        goalAtualizar.title = goalDaRequest.title || goalAtualizar.title;
        goalAtualizar.description = goalDaRequest.description || goalAtualizar.description;
        goalAtualizar.completed = goalDaRequest.completed !== undefined ? goalDaRequest.completed : goalAtualizar.completed;

        response.status(200).send({
            message: "Meta atualizada com sucesso",
            metaAtualizada: goalAtualiza,
        });
    } catch (e) {
        response.status(404).send({
            error: e.message,
        });
    }
};
