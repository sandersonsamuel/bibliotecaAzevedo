import toast from "react-hot-toast";
import {api} from "../api/index.js";

export const cadAluno = (aluno) => {

    api.post('/cadastro/aluno', aluno)
        .then(() => {
            toast.success("Aluno Cadastrado!");
        }).catch((error) => {
            console.error(error)
            toast.error(error.response.data.error);
    })

}