const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);


    // db.query("source ./schema.sql", function(err, res) {
    //   if (err) throw err;
    //   console.log(res);
    // })
    // db.query("source ./seed.sql", function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //   }
    // );

function showMovies() {
    db.query("SELECT * FROM movie_names", function(err, res) {
      if (err) throw err;
      console.log(res);
    });
  }

  function createMovies(movieTitle) {
    db.query("INSERT INTO movie_names ?", movieTitle, function(err, res) {
      if (err) throw err;
      console.log(res);
    });
  }

  function deleteMovie(movieTitle) {
    db.query("DELETE FROM movie_names WHERE ?", movieTitle, function(err, res) {
      if (err) throw err;
      console.log(res);
    });
  }

  function showReviews() {
    db.query("SELECT * FROM reviews", function(err, res) {
      if (err) throw err;
      console.log(res);
    });
  }