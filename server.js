import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './config/config_db.js';
import routes from './routes/index_routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 8080;

sequelize.sync().then(() => {
  console.log('✅ DB Synced');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch(err => console.error('DB sync failed:', err));
