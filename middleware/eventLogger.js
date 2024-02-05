const { v4: uuid } = require("uuid");
const path = require("path");

const { format } = require("date-fns");
const fs = require("fs");
const {mkdir, appendFile} = require("fs").promises;

const eventLogger = async (message, logname) => {
    const dateItem = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateItem}\t ${uuid()} \t ${message}\n`;
    try {
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await mkdir(path.join(__dirname, '..', 'logs'))
        }
        await appendFile(path.join(__dirname, '..', 'logs', logname), logItem)

    } catch (err) {
        console.error(err)
    }
}

const logger = (req, res, next) => {
    eventLogger(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt')
    next()
}

module.exports = {eventLogger, logger}