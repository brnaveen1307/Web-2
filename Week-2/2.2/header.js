
const express = require('express');
const app = express();  
const port = 3000;

app.post('/conversations', function(req, res) {
	console.log(req.headers)
	res.send({
		Message : "2 + 2 = 4"
	})

})

app.listen(port);