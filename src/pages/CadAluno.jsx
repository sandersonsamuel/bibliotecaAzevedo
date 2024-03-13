import React, { useEffect, useState } from 'react'
import { auth, databaseApp } from '../configs/Firebase'
import { addDoc, collection } from 'firebase/firestore'
import InputMask from 'react-input-mask';
import meninoLendo from '../assets/Book lover-bro.svg'

function CadAluno() {

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [matricula, setMatricula] = useState('')
  const [error, setError] = useState(null)

  function cpfIsValid(cpf){

    let count = 0
    let somaCpf = 0
    let cpfFormatado = cpf.toString().slice(0, -2)
    

    for (let index = cpfFormatado.length + 1; index > 1; index--){
      somaCpf += cpfFormatado[count] * index
      count++
    }

    const digito1 = (somaCpf * 10 % 11)

    count = 0
    somaCpf = 0
    cpfFormatado = cpf.toString().slice(0, -1)

    for (let index = cpfFormatado.length + 1; index > 1; index--){
      somaCpf += cpfFormatado[count] * index
      count++
    }

    const digito2 = somaCpf * 10 % 11

    if ((digito1 * 10) + digito2 == cpf.slice(-2)){
      return true
    }else {
      return false
    }

  }

  function sendCad(event){

    event.preventDefault()

    let cpfOnlyNumbers = cpf.match(/\d+/g)
    cpfOnlyNumbers = cpfOnlyNumbers.join('')

    if (cpfOnlyNumbers.length < 11) {
      setError("Cpf Incompleto")
    }else{

      if (cpfIsValid(cpfOnlyNumbers)){

        if (nome == '' || cpf == '' || matricula == '') {
          setError('Preencha corretamente os campos acima')
        }else{
          
          const db = databaseApp

          const cadAlunosCollection = collection(db, 'cadAlunos');

          addDoc(cadAlunosCollection, {
            nome: nome,
            cpf: cpf,
            matricula: matricula
          })

          setNome("")
          setCpf("")
          setMatricula("")
          setError(null)
        }

        

      }else{
        setError("Cpf inválido")
      }

      
    }

    
  }

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-indigo-900 sm:p-5">

      <div className='bg-indigo-500 h-[30rem] md:w-[30rem] hidden md:flex items-center justify-center rounded-l-xl'>
        <img src={meninoLendo} className='w-96' alt="" />
      </div>
        
      <form onSubmit={sendCad} className='bg-white shadow-2x p-10 h-[30rem] md:w-[30rem] rounded-xl md:rounded-l-none flex flex-col justify-evenly'>

        <p className='text-center font-semibold text-4xl mb-2'>Cadastro de aluno</p>
          
          <div className='w-full flex flex-col space-y-2'>

            <div className='flex flex-col'>
              <label htmlFor="nome">Nome Completo: </label>
              <input value={nome} onChange={(e)=> setNome(e.target.value)} autoComplete='off' className='border-2 border-black px-2 py-1 rounded-sm' type="text" id='nome' required/>
            </div>
              
            <div className='flex flex-col'>
              <label htmlFor="cpf">Cpf: </label>
              <InputMask mask='999.999.999-99' value={cpf} onChange={(e)=> setCpf(e.target.value)} autoComplete='off' className='border-2 border-black px-2 py-1 rounded-sm' type="text" id='cpf' required/>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="matricula">Matrícula: </label>
              <input value={matricula} onChange={(e)=> setMatricula(e.target.value)} autoComplete='off' className='border-2 border-black px-2 py-1 rounded-sm' type="text" id='matricula' required/>
            </div>  

          </div>

        <button type='submit' className='bg-gradient-to-r from-indigo-600 to-blue-600 border px-4 py-2 w-full rounded-sm text-white hover:bg-gradient-to-l'>Enviar</button>
        {error && <p className='text-red-600'>Erro: {error}</p>}
          
      </form>
    </div>
       
    
  )
}

export default CadAluno