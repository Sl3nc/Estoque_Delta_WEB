import './styless.css';
import { Link, useLocation } from 'react-router-dom';
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import { IconContext } from "react-icons";

export const TopHeader = () => {
    const { pathname } = useLocation();
    return (
        <header>
            <img src="./estoque_delta_hori.png" alt="logo" />
            <nav>
                <IconContext.Provider value={{ color: "#0597F2", size: "4em" }}>
                    {pathname == '/' && <Link to='/profile'><FaCircleUser /></Link>}
                    {pathname == '/profile' && <Link to='/'><FaRegCircleUser /></Link>}
                </IconContext.Provider>
            </nav>
        </header>
    )
};