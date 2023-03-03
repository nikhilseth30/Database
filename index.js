const express = require('express')
const handlebars = require('handlebars')
const engine = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
require('./model/database')

const app = express()


app.engine('handlebars', engine.engine({
     handlebars: allowInsecurePrototypeAccess(handlebars),
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/emp",require('./controllers/routes'))   //first api


const PORT = 3600
app.listen(PORT,()=>console.log(`server is running at ${PORT}`))
 