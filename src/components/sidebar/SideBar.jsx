import {SideBarItem} from "./SideBarItem.jsx";
import {FaHistory, FaHome, FaUser} from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import {MdExitToApp, MdManageAccounts} from "react-icons/md";
import {useState} from "react";
import {Modal} from "react-responsive-modal";
import {Button} from "../button/index.jsx";

export const SideBar = ({children}) => {

    const [modalDesconectar, setModalDesconectar] = useState(false)

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

                    <p className={'text-red-500 text-2xl cursor-pointer'} title={'Desconectar usuário'}>
                        <MdExitToApp onClick={()=> setModalDesconectar(true)} />
                    </p>

                    <Modal open={modalDesconectar} onClose={()=> setModalDesconectar(false)}>
                        <p className={'text-xl px-5 mr-5'}>Tem certeza que deseja se desconectar da aplicação?</p>

                        <div className={'flex gap-2 items-end'}>
                            <Button onClick={()=> setModalDesconectar(false)}>Cancelar</Button>
                            <Button onClick={handleLogOut}>Desconectar</Button>
                        </div>
                    </Modal>

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