import'../App.css'
import {Button} from "../components/button/index.jsx";
import React from "react";

function Login(){

    return(
        <div className={'flex flex-col items-center justify-center w-screen h-screen bg-indigo-950'}>

            <div id='noise' className='w-screen h-screen fixed z-10 opacity-20 pointer-events-none'>

            </div>

            <form className='w-2/5 z-20 bg-white px-24 py-16'>
                <span className='inline-block'>
                     <p className='text-3xl mb-5 border-b-4 border-slate-700 text-center'>Login</p>
                   </span>

                <div className='flex flex-col'>
                    <label htmlFor="text">Email</label>
                    <input className="w-full h-8 px-2 py-1 outline-none border-b-2 border-neutral-700 bg-transparent" type="text"
                           placeholder="Digite o email" required/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="senha">Senha</label>
                    <input className="w-full h-8 px-2 py-1 outline-none border-b-2 border-neutral-700 bg-transparent" type="text"
                           placeholder="Digite a senha" required/>
                </div>

                <Button>
                    Enviar
                </Button>

            </form>

        </div>
    )
}

export default Login