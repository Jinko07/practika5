require('.env').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = express.env.PORT || 5000;
const app = express();
const start = async() => {
    try{
        app.listen(PORT, () =>
        console.log(`server started on port = ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()