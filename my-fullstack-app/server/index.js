require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Client } = require('pg'); // Import the Postgres client

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// Set up the PostgreSQL connection
const dbClient = new Client({
    connectionString: process.env.DATABASE_URL,
});

// Connect to the database
dbClient.connect()
    .then(() => console.log('Connected to the "testing" PostgreSQL database!'))
    .catch((err) => console.error('Database connection error:', err.stack));

// A simple route to test the database
app.get('/api/users', async (req, res) => {
    try {
        // This is how you run a query
        const result = await dbClient.query('SELECT * FROM example_table');
        res.json(result.rows);
        res.json({ message: "Database connected, ready to query!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});