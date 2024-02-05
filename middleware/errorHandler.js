const { eventLogger } = require("./eventLogger");

const errorHandler = (err, req, res, next) => {
  eventLogger(`${err.name}\t ${err.message}\n`, "errLog.txt");
  res.sendStatus(500).send(err.message);
  next();
};

module.exports = errorHandler
