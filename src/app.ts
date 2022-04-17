import express from "express";
const { queryMiddleware } = require("@abujude/sgs-khadamati");
// import errorsController from "./controllers/errors.controller";
import HttpCustomError from './util/httpCustomError';
import ErrorsMiddleware from './middlewares/errors.middleware';
export default class App {

  public expressApp : express.Application;

  constructor() {
    this.expressApp = express();

    this.initializeMiddlewares();
    this.initializeControllers();
  }

  initializeMiddlewares() {
    this.expressApp.use(express.json());
    this.expressApp.use(queryMiddleware.setLanguage())

    this.expressApp.use(new ErrorsMiddleware().errorResponse)
  }

  initializeControllers() {
    
  }
}

//Express server
// const app = express();
// app.use(express.json);

// app.use(queryMiddleware.setLanguage('A', 'lang'));
// app.use((req, res, next) => {

//   next();
// });

// app.use("/500", errorsController);
// app.use(errorsController.get404);

//This middleware will be called directly whene ever we call next(Error)
// app.use((error: HttpCustomError, req: any, res: any, next: any) => {
//   error.httpStatusCode = error.httpStatusCode || 500;
//   error.message =
//     error.httpStatusCode !== 404 ? error.message || "" : "Data NotFound!";
//   return res
//     .status(error.httpStatusCode)
//     .json({ error: error.message, data: error.errorsData || {} });
// });
