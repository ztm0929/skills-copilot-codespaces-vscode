// Create web server
// 1. Create server
// 2. Create routes
// 3. Create handlers
// 4. Start server
// 5. Test server

// 1. Create server
const express = require('express');
const app = express();

// 2. Create routes
// GET /comments
app.get('/comments', (req, res) => {
  res.json({ message: 'Comments' });
});

// POST /comments
app.post('/comments', (req, res) => {
  res.json({ message: 'Comment created' });
});

// PUT /comments
app.put('/comments', (req, res) => {
  res.json({ message: 'Comment updated' });
});

// DELETE /comments
app.delete('/comments', (req, res) => {
  res.json({ message: 'Comment deleted' });
});

// 3. Start server
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// 4. Test server
// GET http://localhost:4001/comments
// POST http://localhost:4001/comments
// PUT http://localhost:4001/comments
// DELETE http://localhost:4001/comments