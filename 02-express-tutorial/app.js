// //

// const express = require("express");
// const {logger} = require('./logger')
// const authorize = require('./authorize')
// const app = express();
// //request => middleware =>
// app.use([authorize,logger]);

// app.get("/",(req, res) => {
//   res.send("HOME");
// });
// app.get("/about", (req, res) => {
//   res.send("About");
// });
// app.listen(5000);

//CRUD

const express = require("express");
const app = express();
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')
app.use('/api/people',peopleRouter);
app.use('/login', authRouter);



app.listen(5000);
