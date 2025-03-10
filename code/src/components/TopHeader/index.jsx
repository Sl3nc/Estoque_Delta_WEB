import './styless.css';

import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import { IconContext } from "react-icons";

export const TopHeader = ({onClick}) => (
    <header>
        <img src="./estoque_delta_hori.png" alt="logo" />
        <nav>
            <IconContext.Provider value={{ color: "#0597F2", size: "4em" }}>
                <FaCircleUser onClick={onClick} />
            </IconContext.Provider>
        </nav>
    </header>
)