import { feedbacks } from "../DataBase/database.feedback.js";    
import { Feedback } from "../Models/feedback.models.js";

export const getAllFeedbacks = (request, response) => {
    response.status(200).send(feedbacks);
};

export const createFeedback = (request, response) => {
    try {
        const newFeedback = request.body;

        const feedbackCriado = new Feedback(
            feedbacks.length + 1, 
            newFeedback.user,
            newFeedback.message
        );

        feedbacks.push(feedbackCriado); 

        response.status(201).send({
            message: "Feedback criado com sucesso",
            novoFeedback: feedbackCriado,
        });
    } catch {
        response.status(500).send({ error: "Não foi possível criar um feedback" });
    }
};

export const getFeedbackById = (request, response) => {
    try {
        const idParametro = parseInt(request.params.id, 10);
        const feedbackEncontrado = feedbacks.find(f => f.id === idParametro);

        if (!feedbackEncontrado) {
            throw new Error("Feedback não encontrado");
        }

        response.status(200).send(feedbackEncontrado);
    } catch (e) {
        response.status(404).send({
            error: e.message,
        });
    }
};

export const deleteFeedbackById = (request, response) => {
    try {
        const idParametro = parseInt(request.params.id, 10);
        const index = feedbacks.findIndex(f => f.id === idParametro);

        if (index === -1) {
            throw new Error("Feedback não encontrado");
        }

        feedbacks.splice(index, 1); 
        response.status(204).send();
    } catch (e) {
        response.status(404).send(e.message);
    }
};

export const updateFeedbackById = (request, response) => {
    try {
        const idParametro = parseInt(request.params.id, 10);
        const feedbackDaRequest = request.body;

        const feedbackParaAtualizar = feedbacks.find(f => f.id === idParametro);

        if (!feedbackParaAtualizar) {
            throw new Error("Feedback não encontrado");
        }

        feedbackParaAtualizar.user = feedbackDaRequest.user || feedbackParaAtualizar.user;
        feedbackParaAtualizar.message = feedbackDaRequest.message || feedbackParaAtualizar.message;

        response.status(200).send({
            message: "Feedback atualizado com sucesso",
            feedbackAtualizado: feedbackParaAtualizar,
        });
    } catch (e) {
        response.status(404).send({
            error: e.message,
        });
    }
};


