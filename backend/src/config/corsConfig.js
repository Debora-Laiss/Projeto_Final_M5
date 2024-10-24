import cors from 'cors';

const corsConfig = {
    origin:  [ 'http://localhost:3000', 'http://localhost:5174','http://localhost:5173', 'https://projeto-final-m5-4.onrender.com' ], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200 
};

export default cors(corsConfig);
