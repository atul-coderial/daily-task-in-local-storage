//loading the express library
const express = require('express');
const port = 9000;
const app = express();
//loading the views library 
const expressLayout = require('express-ejs-layouts');
//Call the assets folder for styling
app.use(express.static('./assets'));
//Ejs use in middleware
app.use(expressLayout);
//Extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');

//Call and using the router in the middleware
app.use('/', require('./routes'));

app.listen(port, function(err){
    console.log(`Server is running successfully: ${port}`);
});