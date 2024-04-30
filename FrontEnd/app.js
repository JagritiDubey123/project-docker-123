// const express = require('express')
// const bodyParser = require('body-parser');
// const routes = require('./routes')
// const https = require('https');
// const fs = require('fs');
// var cors = require('cors')


// const app = express();


// app.use(cors())






// app.set("view engine", 'ejs')


// app.set('views', 'views')


// app.use(bodyParser.urlencoded({ extended: false }))


// app.use('/', routes)


// const options = {
//     key: fs.readFileSync('/etc/ssl/private/server.key'),
//     cert: fs.readFileSync('/etc/ssl/private/server_utf8.crt'),
//     passphrase: 'jagriti@123'
// };


// const server = https.createServer(options,app);


// const PORT = 5000;
// server.listen(PORT, () => {
//     console.log('server is running on port ${PORT}');
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const routes = require('./routes');
// const https = require('https');
// const fs = require('fs');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Routes
// app.use('/', routes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Internal Server Error');
// });

// // HTTPS Setup
// const keyPath = '/etc/ssl/private/server.key';
// const certPath = '/etc/ssl/private/server_utf8.crt';

// // Validate SSL key and certificate paths
// if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
//   console.error('SSL key or certificate file not found.');
//   process.exit(1); // Exit the process if SSL files are missing
// }

// const options = {
//   key: fs.readFileSync(keyPath),
//   cert: fs.readFileSync(certPath),
//   passphrase: 'jagriti@123'
// };

// const PORT = 5000;

// https.createServer(options, app).listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT} (HTTPS)`);
// });



// app.js

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
// key: fs.readFileSync('/etc/ssl/private/server.key'),
//     cert: fs.readFileSync('/etc/ssl/private/server_utf8.crt'),

// HTTPS Setup
const keyPath = '/etc/ssl/private/server.key';
const certPath = '/etc/ssl/private/server_utf8.crt';

// Validate SSL key and certificate paths
if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.error('SSL key or certificate file not found.');
  process.exit(1); // Exit the process if SSL files are missing
}

const options = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath),
  passphrase: 'jagriti@123' // Passphrase if used while generating the key
};

const PORT = 5000;

// Create HTTPS server
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} (HTTPS)`);
});
