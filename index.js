const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json())

//ROUTES//

//Return list of Students 

app.get("/listOfStudents", async(req, res)=>{
        try{
            const lists = await pool.query("SELECT * FROM student")
            res.json(lists.rows)
        }
        catch(err){
            console.error(err.message)
        }
})

//Return list of books

app.get("/listOfBooks", async(req, res)=>{
    try{
        const lists = await pool.query(
        "SELECT book_id, book_name, author, CASE WHEN borrowed_by IS NULL THEN NULL ELSE CONCAT(student.first_name, ' ', student.last_name) END AS borrowed_by , date_of_borrow, date_of_return FROM books LEFT JOIN student ON books.borrowed_by = student.std_id;")
        res.json(lists.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

//Borrow a book

app.post("/Borrow/:id", async(req, res)=>{
    try{
        const { id } = req.params
        const { borrowed_by } = req.body
        const check = await pool.query(
            "SELECT borrowed_by FROM books WHERE book_id = $1", [id])
        if(check.rows[0]['borrowed_by']==null){
        const borrow = await pool.query(
        "UPDATE books SET borrowed_by = $1, date_of_borrow=NOW(), date_of_return=NOW() + INTERVAL '1 month' WHERE book_id=$2", [borrowed_by, id])
        res.json("1 book borrowed")
        }
        else{
            res.json("Book already borrowed")
        }
    }
    catch(err){
        console.error(err.message)
    }
})

//Book return

app.post("/Return/:id", async(req, res)=>{
    try{
        const { id } = req.params
        const borrow = await pool.query(
        "UPDATE books SET borrowed_by = NULL, date_of_borrow=NULL, date_of_return=NULL WHERE book_id = $1", [id])
        res.json("1 book retured")
    }
    catch(err){
        console.error(err.message)
    }
})

//Add a book

app.post("/AddBook", async(req, res)=>{
    try{
        const results = await pool.query(
            "INSERT INTO books (book_name, author) VALUES($1, $2)", [req.body.book_name, req.body.author]
        )
        res.json("1 Book Added")
    }
    catch(err){
        console.error(err.message)
    }
})
//Add a Student

app.post("/AddStudent", async(req, res)=>{
    try{
        const results = await pool.query(
            "INSERT INTO student (first_name, last_name) VALUES($1, $2)", [req.body.first_name, req.body.last_name]
        )
        res.json("1 Student Added")
    }
    catch(err){
        console.error(err.message)
    }
})

//Delete a Student

app.delete("/DeleteStudent/:id", async(req, res)=>{
    try{
        const results = await pool.query(
            "DELETE FROM student WHERE std_id=$1", [req.params.id]
        )
        res.json("1 Student Deleted")
    }
    catch(err){
        console.error(err.message)
    }
})

//Delete a Book
app.delete("/DeleteBook/:id", async(req, res)=>{
    try{
        const results = await pool.query(
            "DELETE FROM books WHERE book_id=$1", [req.params.id]
        )
        res.json("1 Book Deleted")
    }
    catch(err){
        console.error(err.message)
    }
})

app.listen(5000, ()=>{
    console.log("server has started on port 5000")
})