const express = require("express")
const app = express()
const mysql = require("mysql")
const bcrypt = require("bcrypt")

app.use(express.json());

require("dotenv").config()
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT

const db = mysql.createPool({
   connectionLimit: 100,
   host: DB_HOST,       //This is your localhost IP
   user: DB_USER,            // default WAMP MySQL user is "root"
   password: DB_PASSWORD,            // default WAMP MySQL password is empty
   database: DB_DATABASE,// your database name
   port: DB_PORT            // default MySQL port is "3306"
})


db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})

const port = process.env.PORT
app.listen(port, 
()=> console.log(`Server Started on port ${port}...`))


//CREATE USER
app.post("/register", async (req,res) => {
   const user = req.body.name;
   const userEmail = req.body.email;
   const hashedPassword = await bcrypt.hash(req.body.password,10);
   
   db.getConnection( async (err, connection) => {
       if (err) throw (err)
       const sqlSearch = "SELECT * FROM userTable WHERE user = ?"
       const search_query = mysql.format(sqlSearch,[user])
       const sqlInsert = "INSERT INTO userTable VALUES (0,?,?)"
       const insert_query = mysql.format(sqlInsert,[userEmail, user, hashedPassword])
       // ? will be replaced by values
       // ?? will be replaced by string
       await connection.query (search_query, async (err, result) => {
           if (err) throw (err)
           console.log("------> Search Results")
           console.log(result.length)
           if (result.length != 0) {
               connection.release()
               console.log("------> User already exists")
               res.sendStatus(409) 
           } 
           else {
               await connection.query (insert_query, (err, result)=> {
                   connection.release()
                   if (err) throw (err)
                   console.log ("--------> Created new User")
                   console.log(result.insertId)
                   res.sendStatus(201)
               })
           }
       })
   })
})


