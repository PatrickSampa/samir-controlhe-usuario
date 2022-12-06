import express from 'express';
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
import { Options } from '../config/swagger';


const swaggerSpec = swaggerJSDoc(Options);


const routes = express();


routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export {routes};