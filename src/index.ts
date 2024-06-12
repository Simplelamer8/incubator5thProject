import 'dotenv/config';
import express from 'express';
import connectDB from './db';
import globalRouter from './global-router';
import { logger } from './logger';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(logger);
app.use(express.json());
app.use('/api/',globalRouter);

//mongodb+srv://tengekking8:uUS5P7MBJ3gFBQSB@cluster0.woaufvg.mongodb.net/

app.get('/helloworld',(request,response) =>{
  response.send("Hello World!");
})

app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
