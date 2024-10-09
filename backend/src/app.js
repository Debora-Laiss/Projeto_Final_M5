import express from "express";
import cors from "cors";
import { feedbackRouter } from "./Routers/feedback.router.js";  

const app = express();

//app.use(cors());

app.use(express.json());

app.use('/feedback', feedbackRouter);

//const PORT = 3000;

//app.listen(PORT, () => {
    //console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`);
//});
