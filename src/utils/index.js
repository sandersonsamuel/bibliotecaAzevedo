import {livro} from "../../proxyState/index.js";
import toast from "react-hot-toast";

export const networkError = (e) =>{
        console.log(e)
        toast.error("Network Error");
}

export const resetLivro = () =>{

        livro.isbn = '',
        livro.titulo = '',
        livro.editora = '',
        livro.ano = '',
        livro.genero = '',
        livro.autor = ''
}