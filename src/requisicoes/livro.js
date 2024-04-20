import toast from "react-hot-toast";
import {api} from "../api/index.js";
import {livro} from "../proxyState/index.js";
import {networkError} from "../utils/index.js";

export const cadLivro = () =>{

    api.post("/cadastro/livro", livro)
        .then(response => {
            toast.success("Livro Cadastrado!");
        }).catch((error) => {
            networkError(error)
    })
}
