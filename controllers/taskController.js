const getTasks = (req, res) => {
  res.json({ success: true, message: "terue" });
};
const getTask = (req, res) => {
  res.json({ id: req.params.id, message: "hello" });
};
const postTask = (req, res) => {
  res.json({ success: true, message: "terue" });
};
const patchTask = (req, res) => {
  res.json({ success: true, message: "terue" });
};
const deleteTask = (req, res) => {
  res.json({ success: true, message: "terue" });
};

module.exports = {
  getTasks,
  getTask,
  postTask,
  patchTask,
  deleteTask,
};
