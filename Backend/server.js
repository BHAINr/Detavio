const app  = require('./app');

const dotenv = require('dotenv');
const connnectDatabase = require('./config/database');
dotenv.config({path:"Backend/config/config.env"});

connnectDatabase();

app.listen(process.env.PORT , ()=>{
    console.log(`Server is WORKING  on http://localhost:${process.env.PORT}`) ;
})