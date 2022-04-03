import express from 'express';
import errorsController from './controllers/errors.controller';

//Express server
const app = express();
app.use(express.json);

app.use((req, res, next) => {

  req.query.lang = (req.query.lang as string).toUpperCase() || 'A';

  next();

});

app.use('/500', errorsController.get404);
app.use(errorsController.get404);

//This middleware will be called directly whene ever we call next(Error)
app.use((error: any, req: any, res: any, next: any) => {
  error.httpStatusCode = error.httpStatusCode || 500;
  error.message = error.httpStatusCode !== 404 ? 
      error.message || '' : 'Data NotFound!';
  return res.status(error.httpStatusCode).json({ error : error.message
    , data: error.errorsData || {} });
});

export default app;