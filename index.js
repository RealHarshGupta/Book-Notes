import express from "express";
// import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: 'harsh7104',
  port: 5432,
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