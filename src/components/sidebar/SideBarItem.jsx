import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";
import {useEffect, useState} from "react";

export const SideBarItem = ({icon, name, option}) => {

    const local = useLocation().pathname
    const [showOpt, setShowOpt] = useState(false)

    return (
        <div className={classNames("w-full flex flex-col justify-center text-white cursor-pointer")}>

            <Link to={!option && '/'} onClick={() => setShowOpt(!showOpt)} className={classNames('flex gap-3 items-center px-4 my-3')}>
                <p className={'text-2xl'}>{icon}</p>
                <p>{name}</p>
            </Link>

            {
                option &&

                <div className={'flex flex-col'}>
                    {
                        showOpt && option.map((item, index) => (
                            <Link key={index} to={item.path}
                                  className={classNames("py-3 border-b border-slate-600 px-4 hover:bg-slate-800")}>{item.name}</Link>
                        ))
                    }
                </div>
            }
        </div>
    );
};