// backend/api/index.js
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json([{ name: 'John Doe' }]);
});

module.exports = app;
