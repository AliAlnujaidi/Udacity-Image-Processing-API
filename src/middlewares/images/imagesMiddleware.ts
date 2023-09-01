import express from 'express';
import isValidFilename from 'valid-filename';

export const checkImageQuery = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { filename, width, height } = req.query;
  if (!filename || !width || !height) {
    return res.status(400).send('filename, width and height is required');
  }
  if (!isValidFilename(filename as string)) {
    return res.status(400).send('filename is invalid');
  }
  if (isNaN(Number(width)) || isNaN(Number(height))) {
    return res.status(400).send('width and height must be a number');
  }
  next();
};
export default checkImageQuery;
