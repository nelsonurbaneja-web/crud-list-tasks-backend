import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { RouterProjects } from './routes/projects.routes.js';
import { TaskRouter } from './routes/tasks.routes.js';

export const PORT = process.env.PORT || 5002;

export const app = express();

app.use(cors())
app.use(express.json())

app.use(RouterProjects)
app.use(TaskRouter)

app.get('/hi', (req, res) => {
  console.log('entro')
  res.json({ message: 'Welcome to the API' })
})
