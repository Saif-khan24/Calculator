const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// app.get("/", function(req, res){                //request to server
//     res.send('<h1>Hello Google</h1>');
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');       //to send the whole html file
});

// app.get("/about", function(req, res){
//     res.send('<h1>Saif Khan</h1><p>This is me wasting my life on ...</p>');
// });


app.post('/', function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    console.log(n1 + n2);
    res.send("The sum is " + result);
});


app.listen(2000, function(){
    console.log('Server started on port 2000...');
});