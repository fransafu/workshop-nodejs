// Load file .env with environment vars
import {} from 'dotenv/config';

// Load dependencies
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

// Instancia de express en la variable 'app'
import routes from './routes';

// Swagger
import swaggerDocument from './docs/swagger.json';

const app = express();

// Parse request from client when use form or json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security
app.use(helmet());

// SPA or website
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Load routes
app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Manage route not found (404)
app.use((req, res) => res.status(404).send({ message: `Route ${req.url} Not Found` }));

export default app;
