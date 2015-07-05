'use strict';

import Express from 'express';
import path from 'path';
import render from './render';

const app = new Express();

app.use('/build', Express.static(path.join(process.cwd(), 'build')));
app.use((req, res) => {
  const html = render();
  res.send(html);
});
app.listen(8080, (err) => {
  if (err) {
    console.err(err);
  }
  else {
    console.log('web server listening on port 8080');
  }
});

export default app;
