import express from 'express';
import { verifyToken } from '../auth';
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
import { Options } from '../config/swagger';
import { routerAuth } from './Auth.routes';
import { routerCalculoLote } from './CalculoLote.routes';
import { routerUser } from './User.routes';


const swaggerSpec = swaggerJSDoc(Options);


const routes = express();


routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

routes.use("/auth", routerAuth);

routes.use("/users", routerUser);

routes.use("/calculoLote",
(req, res, next) => {
    return verifyToken.execute(req, res, next);
}, routerCalculoLote);

export default routes;