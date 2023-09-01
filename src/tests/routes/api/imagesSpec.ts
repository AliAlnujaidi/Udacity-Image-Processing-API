import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);
describe('Test images endpoint', () => {
  
  describe('Test /images endpoint with valid query', () => {
    it('should return status 200', async () => {
      const response = await request.get(
        '/api/images?filename=foo&height=200&width=200',
      );
      expect(response.status).toBe(200);
    });
  });

  describe('Test /images endpoint with missing query', () => {
    it('should throw an error with status 400 because filename, height and width missing', async () => {
      const response = await request.get('/api/images');
      expect(response.status).toBe(400);
    });

    it('should throw an error with status 400 because filename missing', async () => {
      const response = await request.get('/api/images?height=200&width=200');
      expect(response.status).toBe(400);
    });

    it('should throw an error with status 400 because height missing', async () => {
      const response = await request.get('/api/images?filename=foo&width=200');
      expect(response.status).toBe(400);
    });

    it('should throw an error with status 400 because width missing', async () => {
      const response = await request.get('/api/images?filename=foo&height=200');
      expect(response.status).toBe(400);
    });
  });

  describe('Test /images endpoint with invalid query', () => {
    it('should throw an error with status 400 because filename is invalid', async () => {
      const response = await request.get(
        '/api/images?filename=foo/33&height=200&width=200',
      );
      expect(response.status).toBe(400);
    });

    it('should throw an error with status 400 because height is not a number', async () => {
      const response = await request.get(
        '/api/images?filename=foo&height=foo&width=200',
      );
      expect(response.status).toBe(400);
    });

    it('should throw an error with status 400 because width is not a number', async () => {
      const response = await request.get(
        '/api/images?filename=foo&height=200&width=foo',
      );
      expect(response.status).toBe(400);
    });
  });
});
