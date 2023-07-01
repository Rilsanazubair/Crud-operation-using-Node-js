const express = require('express');
const router = express.Router();
const  Book = require('../models/book');


router.get('/' ,async(req,res) =>{
    try{
        const books = await Book.find()
        res.json(books)
    }
    catch(err){
        console.log('error' + err)
    }
});

router.post('/' , async(req , res) =>{
    const book = new Book({
        name : req.body.name ,
        author: req.body.author,
        description: req.body.description
    })

    try{
         const a1 = await book.save()
         res.json(a1)
    }
    catch(err){
         res.send('error detected' +err)
    }
});

router.get('/:id' ,async(req,res) =>{
    try{
        const book = await Book.findById(req.params.id)
        res.json(book)
    }
    catch(err){
        console.log('error' + err)
    }
});

router.patch('/:id',async(req,res) =>{
      try{
          const book = await Book.findById(req.params.id)
          book.name = req.body.name;
          book.description = req.body.description
          const a1 = await book.save()
          res.json(a1)
      }
      catch(err)
      {
        res.send('something went wrong'+err)
      }
});

router.delete('/:id',async(req,res) =>{
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book)
        {
            return res.status(404).json({error:"book not found"});
        }
        res.status(200).json({message:"Book deleted successfully"});
    }
    catch(err)
    {
        res.status(500).send("Something went wrong:" + err);
    }
});

module.exports=router;