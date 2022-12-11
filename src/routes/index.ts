import express from 'express';
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
import { Options } from '../config/swagger';
import { routerAuth } from './Auth.routes';
import { routerUser } from './User.routes';


const swaggerSpec = swaggerJSDoc(Options);


const routes = express();


routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

routes.use("/auth", routerAuth);

routes.use("/users", routerUser);

export default routes;