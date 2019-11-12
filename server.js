const express = require('express')
const app = express()

app.use(express.static('./public'))

const port = 4040;
app.listen(port,function(){
    console.log(`App runs on http://localhost:${port}`);
});