import React, { useState } from 'react';

export const AddLivro = () => {
  const [isbn, setIsbn] = useState(null);

  const verificarISBN = () => {
    fetch(`https://openlibrary.org/isbn/${isbn}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar informações do livro.');
        }
        return response.json();
      })
      .then((livro) => {
        // Processar as informações do livro aqui
        console.log('Informações do livro:', livro);
      })
      .catch((error) => {
        console.error('Erro:', error.message);
      });
  };

  return (
    <div className='bg-neutral-500 h-screen w-screen flex items-center justify-center'>
      <div className='w-[30rem] h-[30rem] bg-white rounded-md p-3 p-y5'>
        <p className='text-3xl text-center'>Cadastro de Livro</p>
        <form>
          <div className='flex flex-col my-2'>
            <label htmlFor='isbn'>ISBN:</label>
            <input
              onChange={(e) => setIsbn(e.target.value)}
              className='border border-black py-1 px-3'
              type='text'
              id='isbn'
            />
          </div>
          <button onClick={verificarISBN} className='px-3 py-1 bg-blue-600 text-white'>
            Verificar
          </button>
        </form>
      </div>
    </div>
  );
};
