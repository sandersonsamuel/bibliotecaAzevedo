import { Modal } from 'react-responsive-modal';
import {useState} from "react";

export const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const onCloseModal = () =>{
        setIsOpen(false)
    }
    const onOpenModal = () =>{
        setIsOpen(true)
    }

    return (
        <>
            <button className={''}>Abrir Modal</button>
        </>
    );
};