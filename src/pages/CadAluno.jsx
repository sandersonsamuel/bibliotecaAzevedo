import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask';
import meninoLendo from '../assets/lendoLivros.svg'
import '../App.css'

function CadAluno() {

  const [aluno, setAluno] = useState({
    nome: '',
    email: '',
    cpf: ''

  })

  function sendCad(event){

    event.preventDefault()

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
                <input autoComplete='off' className='border-neutral-700 px-2 py-1 rounded-sm outline-none border-b-2' type="text" id='nome' required/>
              </div>
                
              <div className='flex flex-col'>
                <label htmlFor="cpf">CPF: </label>
                <InputMask mask='999.999.999-99' autoComplete='off' className='border-neutral-700 px-2 py-1 rounded-sm outline-none border-b-2' type="text" id='cpf' required/>
              </div>

              <div className='flex flex-col'>
                <label htmlFor="matricula">MATRÍCULA: </label>
                <input autoComplete='off' className='border-neutral-700 px-2 py-1 rounded-sm outline-none border-b-2' type="text" id='matricula' required/>
              </div>  

            </div>

          <button type='submit' className='bg-gradient-to-r from-indigo-600 to-blue-600 border px-4 py-2 w-full rounded-sm text-white hover:bg-gradient-to-l mt-3'>Enviar</button>

        </form>
          
      </div>
    </div>
       
    
  )
}

export default CadAluno