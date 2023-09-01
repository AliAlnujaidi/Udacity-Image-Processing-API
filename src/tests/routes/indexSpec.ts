import supertest from "supertest";
import app from "../../index";

const request = supertest(app);
describe('Test server is running', () => {
    it('entiry point response with status code 200', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    }
)});