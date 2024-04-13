import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";

export const SideBarItem = ({icon, name, path}) => {

    const local = useLocation().pathname

    return (
        <Link to={path} className={classNames("w-full hover:bg-slate-800 flex p-4 items-center text-white gap-2 cursor-pointer", local == path && 'bg-slate-800' )}>
            <p className={'text-2xl'}>{icon}</p>
            {name.toUpperCase()}
        </Link>
    );
};