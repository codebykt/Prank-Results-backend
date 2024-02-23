const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

// Define the route to fetch the JSON data
app.get('/grades', (req, res) => {
    // Replace 'grades.json' with the path to your JSON file
    // Make sure the JSON file is in the correct location
    fs.readFile('grades.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
