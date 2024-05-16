import {SideBarItem} from "./SideBarItem.jsx";
import {FaHistory, FaHome, FaUser} from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import {MdManageAccounts} from "react-icons/md";
import {useState} from "react";
import {Modal} from "react-responsive-modal";
import {Button} from "../button/index.jsx";
import bookIcon from "../../assets/book.svg";

export const SideBar = ({children}) => {

    const [modalDesconectar, setModalDesconectar] = useState(false)

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const handleLogOut = () =>{
        localStorage.clear()
        location.reload();
    }

    const sideBarItems = [
        {
            name: 'Inicio',
            icon: <FaHome/>,
            path: "/",
        },
        {
            name: 'Aluno',
            icon: <FaUser />,
            option: [
                {name: 'Cadastrar Aluno', path: '/cadastro/aluno'},
                {name: 'Gerenciar Aluno', path: '/gerenciar/aluno'}
            ]
        },
        {
            name: 'Cadastrar Livro',
            icon: <FaBook/>,
            option: [
                {name: 'Cadastrar Livro', path: '/cadastro/livro'},
                {name: 'Gerenciar Livro', path: '/gerenciar/livro'}
            ]
        },
        {
            name: 'Registrar Emprestimo',
            icon: <FaHandshake/>,
            option: [
                {name: 'Cadastrar Emprestimo', path: '/cadastro/emprestimo'},
                {name: 'Gerenciar Emrpestimo', path: '/gerenciar/emprestimo'},
                {name: 'Historico Empréstimos', path: '/historico/emprestimo'}
            ]
        }
    ]

    return (
        <div className="flex">

            <aside className={'h-screen bg-slate-900'}>

                <nav className={'h-full flex flex-col'}>

                    <div className={'flex px-3 py-2 gap-4 border-b border-slate-800'}>
                        <img className={'w-10'} src={bookIcon} alt="icone 2 livros um encima do outro"/>
                        <p className={'text-2xl font-semibold text-white'}>Biblioteca Azevedo</p>
                    </div>

                    <Modal open={modalDesconectar} onClose={() => setModalDesconectar(false)}>
                        <p className={'text-xl px-5 mr-5'}>Tem certeza que deseja se desconectar da aplicação?</p>

                        <div className={'flex gap-2 items-end'}>
                            <Button onClick={() => setModalDesconectar(false)}>Cancelar</Button>
                            <Button onClick={handleLogOut}>Desconectar</Button>
                        </div>
                    </Modal>

                    <div className={'text-sm'}>
                        {sideBarItems.map((item, index) => (
                            <SideBarItem key={index} icon={item.icon} name={!sidebarIsOpen && item.name} options={item.option}/>
                        ))}
                    </div>

                </nav>
            </aside>

            {children}
        </div>
    );
};

