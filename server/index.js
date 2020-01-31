const express = require('express');
const path = require('path');

// Telling the port to use either the one given by the service or if none given use 8800
const port = process.env.port || 8800;
const app = express();

const destinationDir = path.join(__dirname, '../dist');

// Hosting from the Dist folder
app.use(express.static(destinationDir));
console.log(`express hosting from ${destinationDir}`);

// For any url, send the one page (serving index.html)
app.get('*', (req,res) => {
  res.sendFile(path.join(destinationDir, 'index.html'));
});
console.log(`serving index.html`);

// Initialize app and listen to port
app.listen(port, () => {console.log(`server is running on port ${port}`)});

// write a script in package.json to run the script, such as:
// /"scripts"/"start:server":"node server/index.js"
