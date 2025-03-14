import { useState, useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { MdExitToApp } from 'react-icons/md';
import { IconContext } from "react-icons";

import { getAuth, signOut } from "firebase/auth";

import { time_greeting } from '../../utils/time_greeting';
import { user_firestore } from '../../utils/user_firestore';

import './styles.css';

export const HeaderProfile = ({uid}) => {
    const [nameUser, setNameUser] = useState('');
    const [greeting, setGreeting] = useState('');
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

    const handleNameUser = useCallback( () => {
        const userStore = user_firestore(uid);
        console.log(userStore);
        setNameUser(userStore);
      }, [uid]);
    
      useEffect(() => {
        setGreeting(time_greeting());
        setNameUser(user_firestore(uid));
      }, [handleNameUser, uid]);

    return (
        <div className='greeting'>
            <h2 id='text'>{greeting}, {nameUser}</h2>
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