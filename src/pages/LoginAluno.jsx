import { useState } from "react";
import'../App.css'


function LoginAluno(){
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    function enviaform(e){
        e.preventDefault()
        console.log(info)
    }
    const info={
        email:email,
        senha:senha
    }
    return(
        <div>
            <form onSubmit={enviaform}>
       
          <div className="'bg-indigo-900 h-[30rem] md:w-[25rem] hidden md:flex items-center justify-center z-20 shadow-2xl">
             
               <span className='inline-block'>
                 <p className='text-3xl mb-5 border-b-4 border-slate-700 inline-block text-center'>Login</p>
               </span>
                
                <div className='flex flex-col'>  
                    <label htmlFor="email">Email</label>
                    <input className="w-full h-8 px-2 py-1 outline-none border-b-2 border-neutral-700" type="text" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
           
                <div className='flex flex-col'>
                    <label htmlFor="senha">Senha</label>
                    <input className="w-full h-8 px-2 py-1 outline-none border-b-2 border-neutral-700" type="text" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} required />
                </div>
                <button type='submit' className='bg-gradient-to-r from-indigo-600 to-blue-600 border px-4 py-2 w-full rounded-sm text-white hover:bg-gradient-to-l mt-3'>Enviar</button>
        </div>
        </form>
        </div>
    )
}
export default LoginAluno