const express = require('express');
const app = express();
const port = 3306;

const Author = require('./models/Author');

app.get('/authors', async (request, response) => {
  const authors = await Author.getAll();

  response.status(200).json(authors);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));