import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = 3000;

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ headers: req.headers });
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.PING_LISTEN_PORT || port, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PING_LISTEN_PORT || port}`
  );
});
