import * as express from "express";
import HttpCustomError from "../util/httpCustomError";

export default class ErrorsMiddleware {

  errorResponse(error: HttpCustomError,req: express.Request
    , res: express.Response
    , next: express.NextFunction) {
      
      error.httpStatusCode = error.httpStatusCode || 500;
      error.message =
        error.httpStatusCode !== 404 ? error.message || "" : "Data NotFound!";
      return res
        .status(error.httpStatusCode)
        .json({ error: error.message, data: error.data || {} });
  }

}