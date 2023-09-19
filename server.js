import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./router/route.js";
import connect from "./database/conn.js";
import dotenv from "dotenv";
// import timeout from "connect-timeout"

const app = express();

// dotenv.config();
// // middlewares
// app.use(express.json());
// app.use(cors());
// app.use(morgan('tiny'));
// app.disable('x-powered-by');  // less hackers know about our stack
// app.use(timeout('10s'));
// app.use(haltOnTimedout)

// const port = 5000;
const PORT = process.env.PORT || 80;



// HTTP GET Request
app.use('/', (req, res) => {
  res.status(200).json("Home GET Request");
  // console.log("Started");
});

// api routes
// app.use('/api', router);

// function haltOnTimedout(req, res, next) {
//   if (!req.timedout) next();
// }

// start server only when we have valid connection
// connect().then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server connected to http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Cannot connect to the server");
    }
// }).catch(error => {
//     console.log("Invalid database connection..!");
// })
