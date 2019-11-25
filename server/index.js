const express = require("express");
const app = express();

require("./db/mongoose");

const signupAndVerify = require("./routers/signupAndVerify");
const login = require("./routers/login");
const logout = require("./routers/logout");
const items = require("./routers/items");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(signupAndVerify);
app.use(login);
app.use(logout);
app.use(items);

app.listen(8000, () => {
  console.log("server at 8000");
});
