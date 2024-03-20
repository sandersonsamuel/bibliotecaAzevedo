import { useState } from "react"
import '../App.css'

function AddLivro (){

  const date = new Date

  function enviaform(e){

    e.preventDefault()
    
    if (ano > date.getFullYear()){
      return alert(`Digite um data válida menor que ${date.getFullYear()}`)
    }

    if (nome === null){
      return alert("Preencha todos os campos")
    }

    if(isbn === null){
      return alert("Preencha todos os campos")
    }

    if(autor === null){
      return alert("Preencha todos os campos")
    }

    if(editora === null){
      return alert("Preencha todos os campos")
    }


    console.log(livro);

}

const [nome, setNome] = useState(null)
const [isbn, setIsbn] = useState(null)
const [autor, setAutor] = useState(null)
const [editora, setEditora] = useState(null)
const [ano, setAno] = useState(null)

const livro ={
    nome: nome,
    isbn: isbn,
    autor: autor,
    editora: editora,
    ano: Number(ano)
}

return (
    <>
      <div id='noise' className='w-screen h-screen fixed z-10 opacity-20 pointer-events-none '>

      </div>

      <div className="w-screen h-screen flex flex-col items-center bg-indigo-900 justify-center">
      
        <form onSubmit={enviaform} className="flex flex-col w-4/12 gap-2 bg-white px-16 py-12 z-20 shadow-2xl">

          <span className="flex justify-center">
            <span className='inline-block'>
              <p className='text-3xl mb-5 border-b-4 border-slate-700 inline-block text-center'>Cadastro do livro</p>
            </span>
          </span>


          <label htmlFor="livro">Nome:</label>
          <input className="w-full h-8 px-2 py-1 outline-none border-b-2 border-neutral-700" id="livro" type="text" placeholder="Digite o nome do livro" onChange={(e) => setNome(e.target.value)} required autoComplete="off"/>
          
          <label htmlFor="isbn">ISBN:</label>
          <input className="w-full h-8 px-2 py-1 outline-none border-b-2 border-neutral-700" id="isbn" type="text" placeholder="Digite o ISBN do livro" onChange={(e) => setIsbn(e.target.value)} required autoComplete="off"/>

          <label htmlFor="autor">Autor:</label>
          <input className="w-full h-8 px-2 py-1 outline-none border-b-2 border-neutral-700" id="autor" type="text" placeholder="Digite o autor do livro" onChange={(e) => setAutor(e.target.value)} required autoComplete="off"/>

          <label htmlFor="editora">Editora:</label>
          <input className="w-full h-8 px-2 py-1 outline-none border-b-2 border-neutral-700" id="editora" type="text" placeholder="Digite a editora do livro" onChange={(e) => setEditora(e.target.value)} required autoComplete="off"/>

          <label htmlFor="ano">Ano:</label>
          <input className="w-full h-8 px-2 py-1 outline-none border-b-2 border-neutral-700" id="ano" type="number" placeholder="Digite o ano do livro" onChange={(e) => setAno(e.target.value)} required autoComplete="off"/>

          <button className="px-4 py-2 bg-blue-700 text-white mt-5">Cadastrar</button>

        </form>
      </div>

    </>
)

}

export default AddLivro