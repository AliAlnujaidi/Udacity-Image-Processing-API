import express from 'express';
import routes from './routes/index';
import { logger } from './middlewares';
const app = express();
const port = 3000;
app.use(logger);
app.use('/api', routes);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
export default app;
