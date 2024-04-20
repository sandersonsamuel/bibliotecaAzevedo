import {SideBarItem} from "./SideBarItem.jsx";
import {FaHistory, FaHome, FaUser} from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

export const SideBar = ({children}) => {


    const sideBarItems = [
        {
            name: 'Inicio',
            icon: <FaHome/>,
            path: "/",
        },
        {
            name: 'Cadastrar Aluno',
            icon: <FaUser />,
            path: '/cadastro/aluno'
        },
        {
            name: 'Cadastrar Livro',
            icon: <FaBook/>,
            path: "/cadastro/livro"
        },
        {
            name: 'Registrar Emprestimo',
            icon: <FaHandshake/>,
            path: "/cadastro/emprestimo"
        },
        {
            name: 'Gerenciar Empréstimos',
            icon: <MdManageAccounts />,
            path: "/gerenciar/emprestimo"
        },
        {
            name: 'Historico Empréstimos',
            icon: <FaHistory/>,
            path: "/historico/emprestimo"
        }
    ]

    return (
        <div className="flex w-screen">
            <div className={'xl:min-w-[350px] md:min-w-[280px] h-screen border-r-2 bg-slate-900 border-gray-200 flex flex-col'}>

                <div className={'flex text-xl text-white items-center gap-3 p-5'}>
                    <div className={'w-[50px] h-[50px] bg-white rounded-full text-black flex justify-center items-center font-bold'}>
                        BA
                    </div>
                    <p>
                        {'Biblioteca Azevedo'}
                    </p>
                </div>

                <div>

                    <div className={'bg-slate-950 w-full h-[50px] flex items-center text-slate-500 px-5'}>
                        MENU DE NAVEGAÇÃO
                    </div>

                    <div>
                        {sideBarItems.map((item, index) => (
                            <SideBarItem key={index} icon={item.icon} name={item.name} path={item.path}/>
                        ))}
                    </div>

                </div>

            </div>
            {children}
        </div>
    );
};