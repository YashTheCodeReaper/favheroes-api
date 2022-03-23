const app = require("./app");
const mysql2 = require("mysql2");
const axios = require("axios");
const { application } = require("express");

// Database connection params
const dbConnection = mysql2.createConnection({
  host: "favheroes-db.ci2pvnzozk4a.us-west-2.rds.amazonaws.com",
  user: "admin",
  database: "favheroes",
  password: "Ya01022000#",
  port: 3306,
});

// Database connection establishment
dbConnection.connect((error) => {
  if (error) console.log(error);
  console.log("database connection established...");
});

// Creating server
app.listen(3000, "0.0.0.0", () => {
  console.log("server created at port: " + 3000);
});

// Get all heroes data
app.get("/getallheroes", (req, res) => {
  // Query statement for getting all heroes
  let query = "SELECT * FROM heroes";
  // Passing the query statement into the query function
  dbConnection.query(query, (error, result) => {
    // Incase of error, display it to the console and return
    if (error) {
      console.log(error);
      return;
    }
    // Incase you get the result (result length is greater than 0)
    // send the result json data into the html response
    if (result.length > 0) {
      res.send({
        message: "Successfully retrieved all heroes data",
        data: result,
      });
    }
  });
});

// get marvel heroes
app.get("/getallmarvelheroes", (req, res) => {
  // Query statement for getting all mcu heroes
  let query = `SELECT * FROM heroes where universe = 'MCU'`;
  // Passing the query statement into the query function
  dbConnection.query(query, (error, result) => {
    // Incase of error, display it to the console and return
    if (error) {
      console.log(error);
      return;
    }
    // Incase you get the result (result length is greater than 0)
    // send the result json data into the html response
    if (result.length > 0) {
      res.send({
        message: `Successfully retrieved MCU heroes data`,
        data: result,
      });
    }
  });
});

// get marvel heroes
app.get("/getalldcheroes", (req, res) => {
  // Query statement for getting all dc heroes
  let query = `SELECT * FROM heroes where universe = 'DC'`;
  // Passing the query statement into the query function
  dbConnection.query(query, (error, result) => {
    // Incase of error, display it to the console and return
    if (error) {
      console.log(error);
      return;
    }
    // Incase you get the result (result length is greater than 0)
    // send the result json data into the html response
    if (result.length > 0) {
      res.send({
        message: `Successfully retrieved DC heroes data`,
        data: result,
      });
    }
  });
});

// get universe and heroes count on each
app.get("/getuniverseheroescount", (req, res) => {
  // Query statement for getting heroes count in each universe
  let query = `SELECT COUNT(name) as count, universe FROM heroes GROUP BY universe`;
  // Passing the query statement into the query function
  dbConnection.query(query, (error, result) => {
    // Incase of error, display it to the console and return
    if (error) {
      console.log(error);
      return;
    }
    // Incase you get the result (result length is greater than 0)
    // send the result json data into the html response
    if (result.length > 0) {
      res.send({
        message: `Successfully retrieved heroes datas`,
        data: result,
      });
    }
  });
});
