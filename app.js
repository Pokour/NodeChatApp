/*************************************
 * imports and declarations
 */
const express = require('express');
const app = express();
const logger = require('./logger');
app.use(express.json());

/**************************************
 * Middleware
 */
app.use(function(req, res, next){
    console.log('Logging...');
    next();
});

app.use(logger);


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

/**************************************
 * SERVER CODE
 */
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

app.get('/api/posts/:year/:month', (req,res) =>{
    res.send(req.params.year);
});

app.get('/api/courses/:id', (req,res) =>{
    const course = courses.find( (c) => {
        if(c.id === parseInt(req.params.id)){
            return c
        }});
    if(!course) {res.status(404).send('The course with given id was not found')}
    res.send(course);
});

app.post('/api/courses', (req, res) =>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.listen(3000, () => {
    console.log('The server is listening on PORT 3000');
});