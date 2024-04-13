import {SideBar} from "../sidebar/SideBar.jsx";

export const Layout = ({children}) => {
    return (
        <div>
            <SideBar>
                {children}
            </SideBar>
        </div>
    );
};