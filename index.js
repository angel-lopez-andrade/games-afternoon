//Sets up the application with the port
const app = require("./app");
const port = 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));