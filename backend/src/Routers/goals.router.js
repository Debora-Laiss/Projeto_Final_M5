import { Router } from 'express';
import {
    createGoal,
    deleteGoalById,
    getAllGoals,
    getGoalById,
    updateGoalById,
} from "../Controllers/goal.controllers.js";

const goalRouter = Router();

goalRouter.get("/goal/all", getAllGoals);
goalRouter.post("/goal/new", createGoal);
goalRouter.get("/goal/:id", getGoalById);
goalRouter.delete("/goal/:id", deleteGoalById);
goalRouter.put("/goal/:id", updateGoalById);

export { goalRouter }
