const express = require("express");
const router = express.Router();

// modules
const {
  getAllAlunos ,
  createAlunos , 
  getAlunos ,
  deleteAlunos ,
  updateAlunos ,
} = require("../controllers/alunos");

router.route("/").get(getAllAlunos).post(createAlunos);
router.route("/:id").get(getAlunos).patch(updateAlunos).delete(deleteAlunos);

module.exports = router;
