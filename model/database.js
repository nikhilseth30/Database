const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://NIKHIL:1234567890@cluster0.iga2woa.mongodb.net/?retryWrites=true&w=majority',(err)=>{


    if(!err) {console.log("Mongodb Connected successful")}
    else 
    console.log("Problem occur"+ err)
})

