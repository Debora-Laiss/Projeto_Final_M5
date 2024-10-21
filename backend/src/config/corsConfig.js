import cors from 'cors';

const corsConfig = {
    origin: ['http://localhost:3000', 'http://localhost:5174'], // Aceitar múltiplas origens
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200 
};

export default cors(corsConfig);
