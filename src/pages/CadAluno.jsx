import '../App.css'
import {Input} from "../components/input/index.jsx";
import {Button} from "../components/button/index.jsx";
import { cpf } from 'cpf-cnpj-validator'
import {cadAluno} from "../requisicoes/aluno.js";
import {useState} from "react";

export const CadAluno = () => {

    const [aluno, setAluno] = useState({
        nome: '',
        email: '',
        cpf: ''
    });

    const resetAluno = () =>{
        setAluno({nome: '', cpf: '', email: ''})
    }

    const [error, setError] = useState(null);


    const sendForm = (e) =>{

        e.preventDefault();

        if (!cpf.isValid(aluno.cpf)) {
            return setError("Erro: Cpf Inválido")
        }

        cadAluno({nome: aluno.nome, email: aluno.email, cpf: aluno.cpf.replace(/\D/g, "")});

        resetAluno()
    }

  return (

      <div className="h-screen w-full flex flex-col items-center justify-center">
        <form onSubmit={sendForm} className={'w-[450px] h-[500px]'}>

            <p className={'text-3xl font-semibold text-center mb-10'}>Cadastrar Aluno</p>

            <Input type={'text'} label={'Nome Completo:'} value={aluno.nome} onChange={(e)=> setAluno({...aluno, nome: e.target.value})}/>
            <Input type={'email'} label={'Email:'} value={aluno.email} onChange={(e)=> setAluno({...aluno, email: e.target.value})}/>
            <Input type={'text'} label={'CPF:'} value={aluno.cpf} onChange={(e)=> setAluno({...aluno, cpf: e.target.value})}/>
            {error && <p className={'text-red-500'}>{error}</p>}
            <Button>Cadastrar</Button>

        </form>
      </div>
  )
}