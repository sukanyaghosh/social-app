/**
 * @fileoverview This file defines the routes for role management in the social app API.
 * It includes routes for creating, updating, deleting, and retrieving roles.
 */

import { Router } from "express";
import {
  createRole,
  deleteRole,
  getRoles,
  updateRole,
} from "../controllers/role";

const route = Router();

/**
 * Route to get all roles.
 * @name GET /
 * @function
 * @memberof module:routes/role~roleRouter
 * @inner
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
route.get("/", getRoles);

/**
 * Route to create a new role.
 * @name POST /
 * @function
 * @memberof module:routes/role~roleRouter
 * @inner
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
route.post("/", createRole);

/**
 * Route to update an existing role.
 * @name PUT /:role_id
 * @function
 * @memberof module:routes/role~roleRouter
 * @inner
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
route.put("/:role_id", updateRole);

/**
 * Route to delete an existing role.
 * @name DELETE /:role_id
 * @function
 * @memberof module:routes/role~roleRouter
 * @inner
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
route.delete("/:role_id", deleteRole);

export { route as roleRoute };
