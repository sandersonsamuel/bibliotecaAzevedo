import {api} from "../api/index.js";
import {networkError} from "../src/utils/index.js";
import toast from "react-hot-toast";
import {User} from "../proxyState/index.js";

export const login = (nome, senha) =>{
    try {
        api.post("/login", {
            nome: nome,
            senha: senha
        }).then((response) => {
            toast.success("Login efetuado com sucesso!");
            User.isLoggedIn = true
            localStorage.setItem("accessToken", response.data.token);
            setTimeout(()=>{
                location.href="/"
            }, 2000)
        })
    }catch(err){
        networkError(err)
    }
}