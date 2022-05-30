const express = require("express");

const path = require("path");

const app = express();

const port = process.env.PORT || 3300;

app.use(express.static("public"));

app.use(express.static(path.resolve("./views/index.html")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
  console.log("Server Running!");
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.resolve("./views/registro.html"));
});

// const express = require("express");
// const app = express();
// app.use(express.static("public"));

// app.listen(3000, () => {
//   console.log("Servidor funcionando");
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });
