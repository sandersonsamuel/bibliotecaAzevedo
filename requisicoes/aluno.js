import toast from "react-hot-toast";
import {api} from "../api/index.js";

export const cadAluno = (aluno) => {

    api.post('/aluno', aluno)
        .then(() => {
            toast.success("Aluno Cadastrado!");
        }).catch((error) => {
            console.error(error)
            toast.error(error.response.data.error);
    })

}

export const deletarAluno = (id_aluno) => {

    api.delete(`/aluno/${id_aluno}`)
        .then(() => {
            toast.success("Aluno Deletado!");
            setTimeout(()=>{
                location.reload()
            }, [1500])
        }).catch((error) => {
            console.error(error)
            toast.error(error.response.data.error);
    })
}

export const editarAluno = (id_aluno, aluno) => {

    api.put(`/aluno/${id_aluno}`, aluno)
        .then(() => {
            toast.success("Aluno Editado!");
            setTimeout(()=>{
                location.reload()
            }, [1500])
        }).catch((error) => {
            console.error(error)
            toast.error(error.response.data.error);
    })
}