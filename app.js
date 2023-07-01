const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('')



//create express app
const app = express();

//connect mongodb
const db= 'mongodb+srv://rilzana:Mit2000@nodetuts.qv6mb9x.mongodb.net/nodetuts';
mongoose.connect(db);
const con = mongoose.connection;
con.on('open' ,() =>{
    console.log('database connected')

});

app.use(express.json());
  
//middleware
const bkRouter= require('./routes/books');
app.use('/books',bkRouter);      //for all bk reqst send that to bkrouter const
 
// const PORT=3000;

//listen reqst
app.listen(3000,() =>{
    console.log('listening to reqst')
});


