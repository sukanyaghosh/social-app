import express from "express";
import path from "path";

// Create a new express application
const app = express();
const port = process.env.PORT || 3000;

// Set up the view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.set("view options", { layout: false });
// app.set("layout", path.resolve("views/layout"));
// app.set("partials", path.resolve("views/partials"));

// set up the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Define a route
app.get("/api", (req, res) => {
  res.status(200).json({ version: "1.0.0" });
});

// Start the server
(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
