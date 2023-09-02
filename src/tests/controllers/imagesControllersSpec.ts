import path from 'path';
import {
  checkThumbImageExists,
  generateImage,
} from '../../controllers/imagesConroller';
import fs from 'fs';

describe('Test Image controller functions', () => {
  describe('Test processImage function', () => {
    it('should return a true if image generated in thumb folder', async () => {
      const [filename, height, width] = ['fjord', 444, 444];
      const originalPath = path.join('assets', 'full', `${filename}.jpg`);
      const thumbPath = path.join(
        'assets',
        'thumb',
        `${filename}-${height}x${width}.jpg`,
      );
      //delete the image if it exists
      if (fs.existsSync('assets/thumb/fjord-444x444.jpg')) {
        fs.unlinkSync('assets/thumb/fjord-444x444.jpg');
      }
      //geenerate the image
      await generateImage(originalPath, thumbPath, width, height);

      //check if generated image exists
      expect(fs.existsSync('assets/thumb/fjord-444x444.jpg')).toBeTrue();
    });
  });

  describe('Test checkThumbImageExists function', () => {
    it('should return true because image exists in thumb folder', async () => {
      const thumbPath = path.join(
        'src',
        'public',
        'assets',
        'thumb',
        'fjord-500x500.jpg',
      );
      expect(await checkThumbImageExists(thumbPath)).toBeDefined();
    });

    it('should return false because image does not exist in thumb folder', async () => {
      const thumbPath = path.join(
        'src',
        'public',
        'assets',
        'thumb',
        'foo-500x500.jpg',
      );
      expect(await checkThumbImageExists(thumbPath)).toBeFalse();
    });
  });
});
