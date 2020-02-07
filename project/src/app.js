// Load file .env with environment vars
import {} from 'dotenv/config';

// Load dependencies
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';

// Instancia de express en la variable 'app'
import routes from './routes';

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

// Manage route not found (404)
app.use((req, res) => res.status(404).send({ message: `Route ${req.url} Not Found` }));

// Lister server on PORT and connect database
app.listen(process.env.PORT, (err) => {
  if (err) throw err;

  return mongoose
    .connect(process.env.URL_MONGODB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Server listening on port 8080');
    })
    .catch((errDB) => {
      throw errDB;
    });
});
