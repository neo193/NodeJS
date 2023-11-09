const express = require('express');
const app = express();
app.use(express.json());
const courses = [
    { id: 1, name: "Ultimate C#" },
    { id: 2, name: "Ultimate Javascript" },
    { id: 3, name: "Ultimate DSA in Java" },
]
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api/', (req, res) => {
    res.send([1, 2, 3])
})

app.get('/api/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("Error 404: Course not found!");
    res.send(course)
})

app.post('/api/', (req, res) => {
    const course1 = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course1)
    res.send(course1)
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));