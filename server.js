const { app } = require('./index');
const config = require('./config/config');


const port = config.server.port;

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  