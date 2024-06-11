import {livro} from "../../proxyState/index.js";
import toast from "react-hot-toast";

export const networkError = (e) => {
        if (e.response.status === 401){
                if (location.pathname !== '/login'){
                        toast.error("Sua sessaão expirou, faça o login novamente!");
                        setTimeout(()=>{
                                location.href = "/login";
                        }, [1000])
                }
        }else{
                toast.error("Network Error");
        }
}

export const resetLivro = () =>{
        livro.isbn = '',
        livro.titulo = '',
        livro.editora = '',
        livro.ano = '',
        livro.genero = '',
        livro.autor = ''
}