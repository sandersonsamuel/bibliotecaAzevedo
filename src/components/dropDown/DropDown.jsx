import {useState} from "react";
import 'react-dropdown/style.css';
import classNames from "classnames";
import {Modal} from "react-responsive-modal";
import {Button} from "../button/index.jsx";

export const DropDown = ({children, className, options, title}) => {

    const [openDropDown, setOpenDropDown] = useState(false)

    return (
        <div className={"cursor-pointer"}>

            <button type={'button'} className={classNames("", className)}
                    onClick={() => setOpenDropDown(!openDropDown)}>{children}</button>

            {openDropDown &&
                <Modal open={openDropDown} onClose={() => setOpenDropDown(!openDropDown)}>

                    <div className={'py-5 px-5'}>
                        <p className={'my-1 font-bold text-3xl'}>{title}</p>

                        {options.map((item, index) => (
                            <Button onClick={() => item.action()} key={index}>
                                {item.label}
                            </Button>
                        ))
                        }
                    </div>

                </Modal>
            }
        </div>
    );
};
