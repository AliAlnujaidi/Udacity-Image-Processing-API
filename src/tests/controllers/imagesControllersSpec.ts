import path from 'path';
import { checkThumbImageExists } from '../../controllers/imagesConroller';

describe('test if image already generated', () => {
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
