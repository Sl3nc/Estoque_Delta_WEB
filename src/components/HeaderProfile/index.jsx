import { MdExitToApp } from 'react-icons/md';
import { IconContext } from "react-icons";
import { timeGreeting } from '../../utils/timeGreeting';
import { getAuth, signOut } from "firebase/auth";
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const HeaderProfile = () => {
    const navigate = useNavigate();

    const signOutFirebase = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/signIn')
        }).catch((error) => {
            alert('Um erro aconteceu para deslogar, favor tentar novamente')
        });
    }

    return (
        <div className='greeting'>
            <h2 id='text'>{timeGreeting()}, Usuário</h2>
            <div>
                <a id='exit_btn' href='/signIn' onClick={signOutFirebase}>
                    <IconContext.Provider value={{ color: "white", size: "2em" }}>
                        <MdExitToApp />
                    </IconContext.Provider>
                </a>
            </div>
        </div>
    )
}