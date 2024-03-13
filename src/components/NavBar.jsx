import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <header className='w-screen py-5 md:h-32 bg-indigo-900 flex flex-col sm:px-5 md:px-10 relative items-center justify-center'>

      <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-3'>
        
        <p className='text-white text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Biblioteca C. E. M. Aluísio Azevedo</p>
      
        <div className='flex'>
          <input type='text' className='md:w-80 h-9 rounded-l-md px-3 outline-none' />
          <div className='w-9 bg-indigo-500 rounded-r flex justify-center items-center text-white cursor-pointer'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

      </div>
        
      </header>
      <ul className='bg-indigo-950 w-full py-3 md:h-16 sm:h-12 sm:flex text-white justify-center gap-10 items-center text-xl font-semibold'>
        <li className='cursor-pointer text-center'>Entre com seu cadastro</li>
        <li className='cursor-pointer text-center'>Fazer cadastro</li>
      </ul>
    </div>
  )
}
