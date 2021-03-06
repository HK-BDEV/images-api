import { createServer } from 'http';
import app from './app';

const server = createServer(app);

const port = 3001;

server.listen(port, () => console.log(`listening on port ${port}.`));
