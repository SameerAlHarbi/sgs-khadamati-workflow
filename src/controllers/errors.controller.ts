import { NextFunction, Request, Response } from "express";
import { HttpCustomError } from "../util/httpCustomError";

const get404 = (req: Request, res: Response, next: NextFunction) => {
    const error = new HttpCustomError(404);
    return next(error);
}

const get500 = (req: Request, res: Response, next: NextFunction) => {
    const error = new HttpCustomError(
      500,
      "Sorry somthing went wrong! please try again later."
    );
    return next(error);
}

export default {
  get404,
  get500
}