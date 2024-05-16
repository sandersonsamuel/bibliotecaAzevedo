import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";
import {useState} from "react";

export const SideBarItem = ({icon, name, options}) => {

    const local = useLocation().pathname
    const [showOpt, setShowOpt] = useState(false)

    return (
        <div onClick={() => setShowOpt(!showOpt)} className={classNames("w-full flex flex-col justify-center text-white cursor-pointer hover:bg-slate-800", showOpt && 'bg-slate-800')}>

            <div className={classNames('flex gap-3 items-center px-4 my-3')}>
                <p className={'text-2xl'}>{icon}</p>
                <p>{name}</p>
            </div>

            {
                options &&

                <div className={'flex flex-col bg-slate-800'}>
                    {
                        showOpt && options.map((item, index) => (
                            <Link key={index} to={item.path}
                                  className={classNames("py-3 border-b border-slate-600 px-4 hover:bg-slate-700")}>{item.name}</Link>
                        ))
                    }
                </div>
            }
        </div>
    );
};