import utils from "./utils.js";
console.log("hello world");
// console.log(utils);
console.log("sqr :", utils.sqr(5));
console.log("multip;y:", utils.multiply(10));

// const express = require("express")
import "dotenv/config";
import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/you", (req, res) => {
  res.send("hii welcome to jonny");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
