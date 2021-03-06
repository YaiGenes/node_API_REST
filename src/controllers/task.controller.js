import { getPagination } from "../libs/getPagination.js";
import Task from "../models/Task.js";

export const getTasksController = async (req, res) => {
  try {
    const { size, page, title } = req.query;

    const titleSearch = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};
    const { limit, offset } = getPagination(page, size);
    const data = await Task.paginate(titleSearch, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      tasks: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postTaskController = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({ message: "title cannot be empty" });
  }
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });
    const taskSaved = await task.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaskController = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!id) {
      return res.status(404).json({ message: `Task ${id} not exists` });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTaskController = async (req, res) => {
  const { id } = req.params;
  try {
    const delTask = await Task.findByIdAndDelete(id);
    if (!id) {
      return res.status(404).json({ message: `Task ${id} not exists` });
    }
    res.json({ message: `${delTask.title} was deleted succefully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDoneTasks = async (req, res) => {
  try {
    const doneTasks = await Task.find({ done: true });
    res.json(doneTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTasks = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    if (!id) {
      return res.status(404).json({ message: `Task ${id} not exists` });
    }
    const updateTask = await Task.findByIdAndUpdate(id, body);
    res.json({ message: ` ${updateTask.title} task was updated succefully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
