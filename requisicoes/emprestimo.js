import toast from "react-hot-toast";
import {api} from "../api/index.js";
import {networkError} from "../src/utils/index.js";

export const cadEmprestimo = (emprestimo) => {

    api.post('/emprestimo', emprestimo)
        .then(() => {
            toast.success("Emprestimo Registrado!");
        }).catch((error) => {
            networkError(error)
    })
}

export const renovarEmprestimo = async (data_devolucao, id_emprestimo) => {

    console.log(data_devolucao, id_emprestimo)

    api.put(`/emprestimo/renovar/${id_emprestimo}`, { data_devolucao: new Date(data_devolucao)})
        .then((response)=>{
            toast.success("Emprestimo renovado!");
            setTimeout(()=>{
                location.reload()
            }, [1500])
        }).catch((error)=>{
            networkError(error)
    })
}

export const devolverLivro = (id_emprestimo) =>{
    api.put(`/emprestimo/devolver/${id_emprestimo}`)
        .then((response)=>{
            toast.success("livro devolvido!");
            setTimeout(()=>{
                location.reload()
            }, [1500])
        }).catch((error) => {
            networkError(error)
    })
}