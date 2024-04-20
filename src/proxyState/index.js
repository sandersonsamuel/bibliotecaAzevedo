import { proxy } from "valtio";
import moment from "moment";

const dataInicioSemana = moment().startOf('week');
const dataFimSemana = moment().endOf('week');

const dataInicioMes = moment().startOf('month');
const dataFimMes = moment().endOf('month');

export const User = proxy({
    isLoggedIn: true,
})

export let alunos = proxy({
    data: []
})

export const livros = proxy({
    data: []
})

export const emprestimos = proxy({
    data: [],
    getById: function (id) {
        return this.data.filter(emprestimo => emprestimo.id_aluno == id)
    },
    getEmprestimosVencios: function (data){
        return data.filter(emprestimo => moment(emprestimo.data_devolucao).isBefore(moment()) && emprestimo.status !== 'Devolvido')
    },
    getEmprestimosAndamento: function (data){
        return data.filter(emprestimo => emprestimo.status == 'Emprestado')
    },
    getEmprestimosSemana: function (data){
        return data.filter(emprestimo=> moment(emprestimo.data_emprestimo).isBetween(dataInicioSemana, dataFimSemana, null, '[]'))
    },
    getEmprestimosMes: function (data){
        return data.filter(emprestimo=> moment(emprestimo.data_emprestimo).isBetween(dataInicioMes, dataFimMes, null, '[]'))
    },
    agruparEmprestimosPorDia: function (data){

        const emprestimosPorDia = {}

        data.forEach(emprestimo => {
            const emprestimoDia = moment(emprestimo.data_emprestimo).format('YYYY-MM-DD')

            if(!emprestimosPorDia[emprestimoDia]){
                emprestimosPorDia[emprestimoDia] = []
            }

            emprestimosPorDia[emprestimoDia].push(emprestimo)

        })

        return emprestimosPorDia

    }
})

export const livro = proxy({
    isbn: '',
    titulo: '',
    editora: '',
    ano: '',
    genero: '',
    autor: ''
})

export const emprestimo = proxy({
    id_livro: '',
    id_aluno: '',
    data_devolucao: ''
})