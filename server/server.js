import express from "express";
import cors from "cors";
import Dotenv from "dotenv";
import pg from "pg";
const app = express();
Dotenv.config();
app.use(cors());
app.use(express.json());

const connectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: connectionString });

app.get("/", (request, response) => {
  response.json("ommg can you see me");
});

app.get("/categories", async (request, response) => {
  const { category } = request.query;
  const result = await db.query(
    `
      SELECT posts.title, posts.content
      FROM posts
      JOIN post_categories ON posts.id = post_categories.post_id
      JOIN categories ON post_categories.category_id = categories.id
      WHERE categories.name = $1;
      `,
    [category]
  );
  response.json(result.rows);
});

app.post("/posts", async (request, response) => {
  const { title, content, category } = request.body;

  //    category ID based on the category name
  const categoryResult = await db.query(
    "SELECT id FROM categories WHERE name = $1",
    [category]
  );
  const categoryId = categoryResult.rows.length;

  // Insert the new post into the posts table
  await db.query(
    "INSERT INTO posts (title, content, category_id) VALUES ($1, $2, $3)",
    [title, content, categoryId]
  );

  response.status().json({ message: "Post created successfully" });
});

app.listen(3000, () => console.log("you are listening to port 3000..."));
