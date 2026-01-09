import express from 'express'

const app = express();

app.get('/', (req, res) => {
  res.send("Hello world");
  return;
})

app.listen(3000);
