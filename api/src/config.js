import { config } from 'dotenv';
config();
export const port = process.env.PORT;
export const mongoDb = process.env.MONGO_DB;