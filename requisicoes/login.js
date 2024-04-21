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
            console.log(User.isLoggedIn)
            localStorage.setItem("accessToken", response.data.token);
        })
    }catch(err){
        networkError(err)
    }
}