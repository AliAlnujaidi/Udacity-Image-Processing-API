import express from 'express';
const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  console.log(`Request logged: ${req.method} ${req.url}`);
  next();
};
export default logger;
