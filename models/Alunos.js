const mongoose = require("mongoose");
const { Schema } = mongoose;

const AlunoSchema = new Schema({
  nomeAluno: {
    type: String,
    required: [true, "forneca um nome"],
    trim: true,
    maxLength: [30, "Nome nao pode ser maior que 30 caracteres "],
  },
  nomeResponsavel:{
    type: String,
  },
  rgResponsavel:{
    type: String,
  },
  dataNasc: {
    type: Date,
  },
  email:{
    type: String,
  },
  sexo: {
    type: String,
  },
  anoIngresso:{
    type: Date,
  },
  turma:{
    type: String,
  },
  rgAluno:{
    type: String,
  },
  cpfResponsavel:{
    type: String,
  },
  telefoneResponsavel:{
    type: Number
  }
  
});

module.exports = mongoose.model("Alunos", AlunoSchema);
