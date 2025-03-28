import { useState, useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { MdExitToApp } from 'react-icons/md';
import { IconContext } from "react-icons";

import { getAuth, signOut } from "firebase/auth";

import { time_greeting } from '../../utils/time_greeting';
import { user_firestore } from '../../utils/user_firestore';

import './styles.css';

export const HeaderProfile = ({ uid }) => {
    const [nameUser, setNameUser] = useState('');
    const [totalSpent, setotalSpent] = useState(0);
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

    const handleNameUser = useCallback(async () => {
        const userData = await user_firestore(uid);
        setotalSpent(userData.totalSpent)
        setNameUser(userData.name);
    }, [uid]);

    useEffect(() => {
        setGreeting(time_greeting());
        handleNameUser();
    }, [handleNameUser]);

    return (
        <div className='greeting'>
            <h2 >
                <span id='title'>{greeting}, {nameUser}</span>
                <br />
                <span id='subtitle'>total gasto: R$
                    {totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2 })
                    }
                </span>
            </h2>
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