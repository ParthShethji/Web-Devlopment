const express = require('express')
// const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')

// init app & middleware
const app = express()
let db
app.use(express.json())
//db connection
connectToDb((err) => {
    if (!err) {
        app.listen(8800, () => {
            console.log('app listening on port 8800')
        })
        db = getDb()
    }
})




// routes
app.get('/books', (req, res) => {
    let books= []
    // we use collection method 
    db.collection('books')
        .find() //find funtion delivers data in form of batches of 100 files its basically an array
        .sort({author: 1})
        .forEach(book =>  books.push(book))
        .then(()=>{res.status(200).json(books)})
        .catch((err=>{res.status(500).json({error: "cant fetch doc"})}))
})

app.get('/books/:book', (req, res)=>{
        db.collection('books')
            .findOne({book: ObjectId(req.params.book)})
            .then(result =>{
                res.status(201).json(result)
            })
            .catch(err=>{
                res.status(500).json({error: "cant delete doc"})
            })
})

app.post('/books', (req,res) => {
    const book = req.body
    db.collection('books')
    .insertOne(book)
    .then(result =>{
        res.status(201).json(result)
    })
    .catch(err=>{
        res.status(500).json({error: "cant fetch doc"})
    })
})

app.delete('/books:book', (req,res)=>{
        db.collection('books')
            .deleteOne({book: ObjectId(req.params.book)})
            .then(result =>{
                res.status(201).json(result)
            })
            .catch(err=>{
                res.status(500).json({error: "cant delete doc"})
            })
})