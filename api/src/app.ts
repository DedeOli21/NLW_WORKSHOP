import 'reflect-metadata'
import express from 'express';
import createConnection from "./database";
import { router } from './routes';

createConnection();
const app= express();

app.use(express.json()); //Habilitar trabalhar em formato JSON dentro do body da aplicação
app.use(router);

export { app }
