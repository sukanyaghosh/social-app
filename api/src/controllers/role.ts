import { Request, Response, NextFunction } from "express";
import { Role } from "../models";
import { BadRequestError } from "../errors";

/**
 * Get roles
 * @param req
 * @param res
 * @param next
 */
const getRoles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    next(error);
  }
};

/**
 * Create a role
 * @param req
 * @param res
 * @param next
 */
const createRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    const role = await Role.create({ name });
    res.status(201).json(role);
  } catch (error) {
    next(error);
  }
};

/**
 * Update a role
 * @param req
 * @param res
 * @param next
 */
const updateRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { role_id } = req.params;
    const { name } = req.body;

    const role = await Role.findByPk(role_id);
    if (!role) {
      throw new BadRequestError("Role not found");
    }

    role.name = name;
    await role.save();

    res.status(200).json(role);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a role
 * @param req
 * @param res
 * @param next
 */
const deleteRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { role_id } = req.params;

    const role = await Role.findByPk(role_id);
    if (!role) {
      throw new BadRequestError("Role not found");
    }

    await role.destroy();

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export { getRoles, createRole, updateRole, deleteRole };
