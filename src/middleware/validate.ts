import { Request, Response, NextFunction } from "express";
import { Error } from "../utils/restResponse";

export const Validate = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(Error(error.details[0].message,[],400));
  } else {
    next();
  }
};
