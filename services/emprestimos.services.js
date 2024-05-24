import {api} from "../api/index.js"
import {networkError} from "../src/utils/index.js";
import {emprestimos} from "../proxyState/index.js";
import moment from "moment";

export const getAllEmprestimosService = async () => {

    try {
        const response = await api.get('/emprestimos');
        const emprestimosData = response.data.map(emprestimo => ({
            ...emprestimo,
            data_emprestimo: moment(emprestimo.data_emprestimo).add(1, 'day').format('YYYY-MM-DD'),
            data_devolucao: moment(emprestimo.data_devolucao).add(1, 'day').format('YYYY-MM-DD'),
        }));
        emprestimos.data = emprestimosData;
    }catch(error){
        networkError(error)
    }

};
