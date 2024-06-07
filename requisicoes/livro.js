import toast from "react-hot-toast";
import {api} from "../api/index.js";
import {networkError} from "../src/utils/index.js";

export const cadLivro = (livro) =>{

    api.post("/livro", livro)
        .then(response => {
            toast.success("Livro Cadastrado!");
        }).catch((error) => {
            networkError(error)
    })
}

export const updateLivro = (id, livro) => {
    api.put(`/livro/${id}`, livro)
        .then(response => {
            toast.success("Livro Atualizado!");
            setTimeout(()=>{
                location.reload()
            }, [1500])
        }).catch((error) => {
            networkError(error)
    })
}

export const deleteLivro = (id) => {
    api.delete(`/livro/${id}`)
        .then(response => {
            toast.success("Livro Deletado!");
        }).catch((error) => {
            networkError(error)
    })
}
