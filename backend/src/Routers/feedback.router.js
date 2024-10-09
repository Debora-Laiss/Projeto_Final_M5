import { Router } from "express";
import {
    createFeedback,
    deleteFeedbackById,
    getAllFeedbacks,
    getFeedbackById,
    updateFeedbackById,
} from "../Controllers/feedback.controllers.js"; 

const feedbackRouter = Router();

feedbackRouter.get("/feedback/all", getAllFeedbacks);
feedbackRouter.post("/feedback/new", createFeedback);
feedbackRouter.get("/feedback/:id", getFeedbackById);
feedbackRouter.delete("/feedback/:id", deleteFeedbackById); 
feedbackRouter.put("/feedback/:id", updateFeedbackById);

export { feedbackRouter };
