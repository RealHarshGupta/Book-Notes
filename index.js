import express from "express";
// import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

db.connect();
const results = await db.query("SELECT * FROM books");
console.log(results.rows);


app.use(express.static("public"));
app.get('/',async(req,res)=>{
   
   res.render('index.ejs',{results:results.rows});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
