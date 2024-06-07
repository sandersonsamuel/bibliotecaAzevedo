import {api} from "../api/index.js";
import toast from "react-hot-toast";
import {networkError} from "../src/utils/index.js";

export const login = (nome, senha) =>{
    api.post("/login", {
        username: nome,
        password: senha
    }).then((response) => {
        toast.success("Login efetuado com sucesso!");
        localStorage.setItem("accessToken", response.data.token);
        setTimeout(()=>{
            location.href="/"
        }, 2000)
    }).catch((error) => {

        if (error.response.status === 401) {
            return toast.error("Usuário ou senha inválidos");
        }

        networkError(error)
    })
}