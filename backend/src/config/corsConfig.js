import cors from 'cors';

const corsConfig = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
    optionsSuccessStatus: 200 
  };

export default cors(corsConfig) 