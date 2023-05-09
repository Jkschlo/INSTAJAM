var Post = require("../model/post");
console.log("[postService] initialized");

const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "instajam",
  password: "YOUR_PG_PASS", //replace with your postgres password here
  port: 5432,
});

exports.savePost = async (post) => {
  let sqlText =
    "INSERT INTO post (title, body, link) VALUES ('" +
    post.title +
    "', '" +
    post.body +
    "', '" +
    post.link +
    "')";
  let res = await pool.query(sqlText);
  return true;
};

exports.getPostById = async (postId) => {
  let sqlText = "SELECT * FROM posts WHERE id = " + postId;

  let res = await pool.query(sqlText);
  if (res.rowCount > 0) {
    return new Post.post(res.title, res.body, res.link);
  }
};

exports.getPosts = async () => {
  let sqlText = "SELECT * FROM post";
  let res = await pool.query(sqlText);

  let post = [];
  for (let i = 0; i < res.rows.length; i++) {
    post.push(
      Post.createPost(res.rows[i].title, res.rows[i].body, res.rows[i].link)
    );
  }
  return post;
};

exports.deletePosts = async () => {
  let sqlText = "DELETE FROM post";
  await pool.query(sqlText);
  return true;
};
