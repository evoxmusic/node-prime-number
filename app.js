const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({"prime": "number", ":)": ":(", "test": "test", "toto": "toto"});
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;
