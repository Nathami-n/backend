const Task = require("../config/database");

const postController = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getAllTasksController = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const getSingleTaskController = async (req, res) => {
  const { id: taskID } = req.params;
  const task = Task.find({ _id: taskID });
  res.status(200).json({ task });
};
const patchTaskController = async (req, res) => {
  const { id: taskID } = req.params;
  const task =  await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: True,
    runValidators: true,
  });
  if (!task) {
    res.status(404).json({ msg: `no task with the id ${taskID}` });
  }

  res.status(201).json({ task });
};
 const deleteTaskController = async (req, res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id:taskID});
    if(!task) {
        res.status(404).json({ msg: `no task with the id ${task}`});
    }
    res.status(200).json({task});
 }

module.exports = {
  postController,
  getAllTasksController,
  getSingleTaskController,
  patchTaskController,
  deleteTaskController,
};
