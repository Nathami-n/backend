const express = require('express')
const {getAllTasks, getSingleTask, postTask, deleteTask, patchTask} = require('../controllers/taskController')
const router = express.Router()

router.route('/').post(postTask).get(getAllTasks)
router.route('/:id').patch(patchTask).delete(deleteTask).get(getSingleTask);


module.exports = router;