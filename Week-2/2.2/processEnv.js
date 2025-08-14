
const express = require('express');
const app = express();  
const port = process.env.PORT || 3000

app.post('/processEnv', function(req, res) {
    console.log(req.headers)
    res.send({
        Message : "2 + 2 = 4"
    })

})

app.listen(port, function(){
    console.log("Example app listening on port " + port);
});