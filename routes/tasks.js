const express = require('express')
const {getTasks} = require('../controllers/taskController')
const router = express.Router()

router.route('/').get(getTasks)


module.exports = router;