const asyncCover = require("../middleware/asyncCover");
const {
  postController,
  getAllTasksController,
  getSingleTaskController,
  patchTaskController,
  deleteTaskController,
} = require("./subController");

const postTask = asyncCover(postController);

const getAllTasks = asyncCover(getAllTasksController);

const getSingleTask = asyncCover(getSingleTaskController);

const patchTask = asyncCover(patchTaskController);

const deleteTask = asyncCover(deleteTaskController);
module.exports = {
  getAllTasks,
  getSingleTask,
  postTask,
  patchTask,
  deleteTask,
};
