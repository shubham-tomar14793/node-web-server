const express = require('express');

const port = process.env.PORT || 3000;
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));
app.use((req, res, next) => {
    let now = new Date().toString();

    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});
app.get('/', (req, res) => {
    res.send({
        name: 'shubham',
        age: 26
    });
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'about page',
        currentYear : new Date().getFullYear()
    });
});
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});