const express = require("express");

const app = express();

// Config
const PORT = process.env.PORT || 3000;

// Assets
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files
app.use(express.static("public"));

// Routes
app.use('/api', require("./routes/api/index"));

// Start server
app.listen(PORT, () => {
	console.log("server started on port : " + PORT);
});
