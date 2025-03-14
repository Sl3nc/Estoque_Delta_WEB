import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderPage } from '../../components/HeaderPage';
import { HomePost } from '../../components/HomePost'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './styless.css';

export const Home = () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState();

    const handleUid = useCallback(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            } else {
                navigate('/signIn', { 
                    state: 'Antes de acessar o serviço, faça login!' 
                });
            }
        });
    }, []);

    useEffect(() => {
        handleUid();
    }, [handleUid]);

    return (
        <>
            <HeaderPage />
            {uid !== undefined && <HomePost uid={uid} />}
        </>
    );
};