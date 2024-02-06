const express = require('express')
const {getTasks, getTask, postTask, deleteTask, patchTask} = require('../controllers/taskController')
const router = express.Router()

router.route('/').get(getTasks).post(postTask)
router.route('/:id').get(getTask).patch(patchTask).delete(deleteTask)


module.exports = router;