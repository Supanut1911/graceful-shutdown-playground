import { log } from 'console';
import express from 'express'
const app = express()
const state = { isShutdown: false };
app.get('/', function (req, res) {
    res.send('Hello World!')
})
app.use('/health', (req, res) => {
  if (state.isShutdown) {
    res.status(500).send('respon not ok');
  console.log('respon not ok');

  } 
  res.status(200).send('respon ok');
  console.log('respon ok');
  
});

//Graceful shutdown
const gracefulShutdown = () => {
    state.isShutdown = true
    console.log('Got SIGTERM. Graceful shutdown start', new Date().toISOString());
    // Additional cleanup tasks go here, e.g., close database connection
    server.close( () => {
        console.log('Close out remaining connections.');
        process.exit()
    })

    setTimeout( ()=> {
        console.error('Could not close connections in time, forcefully shutting down')
        process.exit() 
    }, 10 * 1000)
}

//listen for TERM signal eg. kill
process.on('SIGTERM',() => {
    console.log('case SIGTERM');
    gracefulShutdown()
})

//listen for INT signal eg. ctrl + c
process.on('SIGINT', () => {
    console.log('case SIGINT');
    gracefulShutdown()
})


let server = app.listen(3000, function () {
  console.log('Example app listening on port 3000, on process id =', process.pid)
})

//implement mongo