const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 4000

const cadAlunos = mongoose.model('cad_alunos', {
  nome: String,
  cpf: String,
  matricula: String
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async (req, res)=>{
  const cad_aluno = await cadAlunos.find()
  return res.send(cad_aluno)
})

app.post('/', async (req, res)=>{

  const cad_aluno = new cadAlunos({
    nome: req.body.nome,
    cpf: req.body.cpf,
    matricula: req.body.matricula
  })

  await cad_aluno.save()

  return res.send(cad_aluno)
})

app.listen(port, ()=>{
  mongoose.connect('mongodb+srv://samuel_sanderson:31gsMUqTaVxu64uy@cluster0.yjnnvri.mongodb.net/bibliotecaAzevedo')
  console.log("Running...")
  
})