import toast from "react-hot-toast";
import {api} from "../api/index.js";
import {networkError} from "../src/utils/index.js";
import moment from "moment";

export const cadEmprestimo = (emprestimo) => {

    api.post('/cadastro/emprestimo', emprestimo)
        .then(() => {
            toast.success("Emprestimo Registrado!");
        }).catch((error) => {
            networkError(error)
    })
}

export const renovarEmprestimo = async (data_devolucao, id_emprestimo) =>{

    console.log(moment(data_devolucao).format('YYYY-MM-DD'));

    api.put('/renovar/emprestimo',{
        data_devolucao: moment(data_devolucao).format('YYYY-MM-DD'),
        id_emprestimo: id_emprestimo
    })
        .then((response)=>{
            toast.success("Emprestimo renovado!");
        }).catch((error)=>{
            networkError(error)
    })
}

export const devolverLivro = (id_emprestimo) =>{
    api.put('/devolver/livro',{
        id_emprestimo: id_emprestimo,
    })
        .then((response)=>{
            toast.success("livro devolvido!");
        }).catch((error) => {
            networkError(error)
    })
}