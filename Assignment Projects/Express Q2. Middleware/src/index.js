import express from "express";
import cors from "cors";
import authenticate from "./middleware/authMiddleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 3000;

const posts = [
  { id: 1, title: "Post 1", content: "This is the content of post 1" },
  { id: 2, title: "Post 2", content: "This is the content of post 2" },
  { id: 3, title: "Post 3", content: "This is the content of post 3" },
  { id: 4, title: "Post 4", content: "This is the content of post 4" },
  { id: 5, title: "Post 5", content: "This is the content of post 5" },
];

app.get("/post", authenticate, (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
