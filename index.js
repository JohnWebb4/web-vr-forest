const express = require('express');

const app = express();

const PORT = 8000;

app.use(express.static('dist'));

app.get('/', (_req, res) => {
  res.sendFile('/dist/index.html');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});
