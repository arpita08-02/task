const express = require('express');
const app = express();

app.get('/sayHello', (req, res) => {
    try {
        res.json({ message: "Hello User" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});