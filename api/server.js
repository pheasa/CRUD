// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const multer = require("multer");

server.use(middlewares);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp/my-uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const bodyParser = multer({ storage: storage }).any();
server.post("/products", (req, res, next) => {
  let hasError = false;
  let errors = {};
  if (!req.body.name) {
    hasError = true;
    errors.name = "Name is require.";
  }
  if (!req.body.category) {
    hasError = true;
    errors.category = "category is require.";
  }
  if (!req.body.price) {
    hasError = true;
    errors.price = "Name is require.";
  }
  if (!req.body.stock) {
    hasError = true;
    errors.stock = "Name is require.";
  }
  if (!req.body.description) {
    hasError = true;
    errors.description = "Name is require.";
  }
  if (hasError) {
    res.status(400).jsonp(errors);
    return;
  }
});

server.use(bodyParser);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running.");
});
