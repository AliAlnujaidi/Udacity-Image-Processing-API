import express from 'express';
import { promises as fs } from 'fs';
import sharp from 'sharp';
import path from 'path';

export const processImage = async (
  req: express.Request,
  res: express.Response,
) => {
  /*
   * get filename, height and width from query
   * then use them to create the path to the original image
   * and the path to the thumbnail image
   */
  const { filename, height, width } = req.query;
  const originalPath = path.join(
    'src',
    'public',
    'assets',
    'full',
    `${filename}.jpg`,
  );

  const thumbPath = path.join(
    'src',
    'public',
    'assets',
    'thumb',
    `${filename}-${height}x${width}.jpg`,
  );

  //check if the thumbnail image exists
  const thumbImageExists = await checkThumbImageExists(thumbPath);

  // if it exists, send it to the client
  if (thumbImageExists) {
    console.log('cached image returned');
    res.sendFile(thumbPath, { root: '.' });
    return;
  }
  // if it doesn't exist, create it, then send it to the client
  try {
    const image = sharp(originalPath);
    image.resize(Number(width), Number(height));
    await image.toFile(thumbPath);
    res.sendFile(thumbPath, { root: '.' });
  } catch (err) {
    res.send('Photo not found').status(404);
  }
};

export async function checkThumbImageExists(thumbPath: string) {
  try {
    await fs.access(thumbPath);
    return true;
  } catch (err) {
    return false;
  }
}
