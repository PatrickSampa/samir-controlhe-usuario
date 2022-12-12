import { Router } from "express";
import { createCalculoLoteController } from "../modules/CreateCalculoLote";
import { deleteAllCalculoLoteController } from "../modules/DeleteAllCalculoLote";
import { deleteCalculoLoteController } from "../modules/DeleteCalculoLote";
import { getCalculoLoteController } from "../modules/GetCalculoLote";

/**
 * @swagger
 * tags:
 * name: CalculoLote
 * description: The users managin API
 */

const routerCalculoLote = Router();



routerCalculoLote.post("/", (req, res) => {
    return createCalculoLoteController.execute(req, res);
})

// /**
//  * @swagger
//  * /users/login:
//  *   post:
//  *     summary: Login user
//  *     tags: [Login]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Login'
//  *     responses:
//  *       200:
//  *         description: The user was successfully login
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Token'
//  *       500:
//  *         description: Some server error
//  *       400:
//  *         description: The request error
//  */
routerCalculoLote.get("/", (req, res) => {
    return getCalculoLoteController.execute(req, res);
})

// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     summary: Returns the User
//  *     tags: [User]
//  *     security: [{bearerAuth: []}]
//  *     responses:
//  *       401:
//  *         description:  Unauthorized
//  *       200:
//  *         description: The get user
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/User'
//  */
routerCalculoLote.delete("/",
    (req, res) => {
        return deleteAllCalculoLoteController.execute(req, res);
    })

// /**
// * @swagger
// * /users:
// *   put:
// *     summary: Upadate User
// *     required: true
// *     tags: [User]
// *     security: [{bearerAuth: []}]
// *     requestBody:
// *       content:
// *         application/json:
// *           schema:
// *             $ref: '#/components/schemas/UpdateUser'
// *     responses:
// *       200:
// *         description: The User was successfully update
// *       500:
// *         description: Some server error
// *       400:
// *         description: The request error
// *       401:
// *         description:  Unauthorized
// */

routerCalculoLote.delete("/:id",
    (req, res) => {
        return deleteCalculoLoteController.execute(req, res);
    })





export { routerCalculoLote };