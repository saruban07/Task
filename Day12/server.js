const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
server.use(express.json());

const items = [
    { id: 1, Name: 'Shan' },
    { id: 2, Name: 'Saru' },
    { id: 3, Name: 'Vel' }
];

// Routes
server.get('/', (req, res) => {
    res.send("I am Ironman");
});

server.get('/Saran', (req, res) => {
    res.send("I am Inevitable");
});

server.get('/PRO', (req, res) => {
    res.json(items);
});

server.post('/PRO', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    const newItem = { id: items.length + 1, Name: name };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
