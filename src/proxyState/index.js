import { proxy } from "valtio";

export const User = proxy({
    isLoggedIn: true,
})

export let alunos = proxy({
    data: []
})

export const livros = proxy({
    data: []
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