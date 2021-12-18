import res from "express/lib/response";
import Task from "../models/Task.js";

export const getTasksController = async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
};

export const postTaskController = async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ? req.body.done : false,
  });
  const taskSaved = await task.save();
  res.json(taskSaved);
};

export const getTaskController = async (req, res) => {
  console.log(req.params.id);
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const deleteTaskController = async (req, res) => {
  console.log(req.params.id);
  const delTask = await Task.findByIdAndDelete(req.params.id);
  res.json({ message: `${delTask.title} was deleted succefully` });
};

export const getDoneTasks = async (req, res) => {
  const doneTasks = await Task.find({ done: true });
  res.json(doneTasks);
};

export const updateTasks = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: ` ${updateTask.title} task was updated succefully` });
  } catch (error) {
    res.json({ message: error.getMessage() });
  }
};
