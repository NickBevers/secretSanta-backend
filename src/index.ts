import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mysql2 from "mysql2";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// connect to database
const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', SearchResult);

app.get("/", (req: Request, res: Response) => {
  res.send(
    "This is Nick's secret santa API get out if you don't need to be here."
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
