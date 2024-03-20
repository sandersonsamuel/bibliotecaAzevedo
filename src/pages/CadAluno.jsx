import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask';
import meninoLendo from '../assets/lendoLivros.svg'
import '../App.css'

function CadAluno() {

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [matricula, setMatricula] = useState('')
  const [error, setError] = useState(null)

  function cpfIsValid(cpf){

    let count = 0
    let somaCpf = 0
    let cpfFormatado = cpf.toString().slice(0, -2)
    const cpfSeparado = cpf.toString().split('')

    if(cpfSeparado.every(num => num == cpf[0])){
      return false
    }

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
          return setError('Preencha corretamente os campos acima')
        }

        fetch('http://localhost:4000/')
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));

      }else{
        setError("Cpf inválido")
      }

    }

  }

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-indigo-950 sm:p-5 z-0">

      <div id='noise' className='w-screen h-screen fixed z-10 opacity-20 pointer-events-none '>

      </div>

      <div className='bg-indigo-900 h-[30rem] md:w-[25rem] hidden md:flex items-center justify-center z-20 shadow-2xl'>
        <img src={meninoLendo} className='w-96' alt="" />
      </div>
        
      <div className='bg-white shadow-2x p-8 sm:p-10 h-[30rem] md:w-[25rem] flex flex-col z-20 shadow-2xl'>

        <form onSubmit={sendCad} className='w-full h-full flex flex-col justify-center'>

          <span className="flex justify-center">
            <span className='inline-block'>
              <p className='text-3xl mb-5 border-b-4 border-slate-700 inline-block text-center'>Cadastro do aluno</p>
            </span>
          </span>

            <div className='w-full flex flex-col space-y-1'>

              <div className='flex flex-col'>
                <label htmlFor="nome">NOME COMPLETO: </label>
                <input value={nome} onChange={(e)=> setNome(e.target.value)} autoComplete='off' className='border-neutral-700 px-2 py-1 rounded-sm outline-none border-b-2' type="text" id='nome' required/>
              </div>
                
              <div className='flex flex-col'>
                <label htmlFor="cpf">CPF: </label>
                <InputMask mask='999.999.999-99' value={cpf} onChange={(e)=> setCpf(e.target.value)} autoComplete='off' className='border-neutral-700 px-2 py-1 rounded-sm outline-none border-b-2' type="text" id='cpf' required/>
              </div>

              <div className='flex flex-col'>
                <label htmlFor="matricula">MATRÍCULA: </label>
                <input value={matricula} onChange={(e)=> setMatricula(e.target.value)} autoComplete='off' className='border-neutral-700 px-2 py-1 rounded-sm outline-none border-b-2' type="text" id='matricula' required/>
              </div>  

            </div>

          <button type='submit' className='bg-gradient-to-r from-indigo-600 to-blue-600 border px-4 py-2 w-full rounded-sm text-white hover:bg-gradient-to-l mt-3'>Enviar</button>
          {error && <p className='text-red-600 font-bold'>Erro: {error}</p>}

        </form>
          
      </div>
    </div>
       
    
  )
}

export default CadAluno