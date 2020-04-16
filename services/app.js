const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        models = require('./models');

const   host = 'localhost';
const   port = 3000;

app.use(express.static('../application/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/')(app);

app.listen(port, host, () => console.log(`Server listen on ${host}:${port}`));
