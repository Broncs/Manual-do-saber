const Alunos = require("../models/Alunos");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllAlunos = asyncWrapper(async (req, res) => {
  const alunos = await Alunos.find({});
  res.status(200).json({ alunos });
});

const createAlunos  = asyncWrapper(async (req, res) => {
  console.log(req.body); 


  const alunos = await Alunos.create(req.body);
  

  res.status(201).json({ alunos });
 });

const getAlunos  = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const alunos = await Alunos.findOne({ _id: taskID });

  if (!alunos) {
    return next(createCustomError(`Nenhum aluno com o Id :  ${taskID}`, 404));
  }

  res.status(200).json({ alunos });
});

const deleteAlunos  = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const alunos = await Alunos.findOneAndDelete({ _id: taskID });

  if (!alunos) {
    return next(createCustomError(`Nenhum aluno com o Id :  ${taskID}`, 404));
  }
  // res.status(200).json({ task });
  // res.status(200).send();
  res.status(200).json({  status: "success" });
});

const updateAlunos  = asyncWrapper(async (req, res) => {
  const { id: TaskID } = req.params;
  const alunos = await Alunos.findOneAndUpdate({ _id: TaskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!alunos) {
    return next(createCustomError(`No task with id :  ${taskID}`, 404));
  }

  res.status(200).json({ alunos });
});

module.exports = {
  getAllAlunos ,
  createAlunos ,
  getAlunos ,
  updateAlunos ,
  deleteAlunos ,
};
