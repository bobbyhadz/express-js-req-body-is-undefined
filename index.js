// req.body is undefined in Express.js & Node issue

import express from 'express';
import bodyParser from 'body-parser';

// 👇️ if you use CommonJS require()
// const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// ✅ Register the `bodyParser` middleware here
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.post('/login', function (req, res) {
  // ✅ req.body is an object here
  console.log('req.body: ', req.body);

  console.log(
    `username: ${req.body.username},
    password: ${req.body.password}`,
  );

  res.send(
    `username: ${req.body.username},
    password: ${req.body.password}`,
  );
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
