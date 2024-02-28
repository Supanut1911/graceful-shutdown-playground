import express from 'express'
const app = express()
const state = { isShutdown: false };
app.get('/', function (req, res) {
    res.send('Hello World!')
})
app.use('/health', (req, res) => {
  if (state.isShutdown) {
    res.status(500).send('respon not ok');
  } 
  res.status(200).send('respon ok');
});

let server = app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})