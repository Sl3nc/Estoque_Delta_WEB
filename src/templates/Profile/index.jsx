import { useEffect, useState, useCallback } from 'react';

import { HeaderProfile } from '../../components/HeaderProfile'
import { HeaderPage } from '../../components/HeaderPage';
import { ProfilePost } from '../../components/ProfilePost'
import { useNavigate } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import './styles.css';

export const Profile = () => {
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
        <div>
            <HeaderPage />
            <HeaderProfile uid={uid}/>
            <ProfilePost uid={uid}/>
        </div>
    );
};