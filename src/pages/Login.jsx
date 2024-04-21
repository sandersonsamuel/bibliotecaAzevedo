import'../App.css'
import {Button} from "../components/button/index.jsx";
import {Input} from "../components/input/index.jsx";
import {useState} from "react";
import {login} from "../../requisicoes/login.js";

function Login(){

    const [user ,setUser] = useState({
        nome: '',
        senha: ''
    })

    const handleSubmit = async (e) => {

        e.preventDefault();
        await login(user.nome, user.senha);

    }

    return(
        <div className={'flex flex-col items-center justify-center w-screen h-screen bg-indigo-950'}>

            <form onSubmit={handleSubmit} className='w-2/5 z-20 bg-white p-10'>
                <span className='inline-block mb-3'>
                     <p className='text-3xl border-b-4 border-blue-700 text-center'>Login</p>
                   </span>

                <Input type={'text'} value={user.name} label={'Usuário'} onChange={(e)=> setUser({...user, nome: e.target.value})}/>

                <Input type={'password'} value={user.senha} label={'Senha'} onChange={(e)=> setUser({...user, senha: e.target.value})}/>

                <Button type={'onSubmit'}>
                    Enviar
                </Button>

            </form>

        </div>
    )
}

export default Login