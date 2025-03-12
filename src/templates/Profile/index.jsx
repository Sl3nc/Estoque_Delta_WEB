import { useEffect } from 'react';
import { HeaderProfile } from '../../components/HeaderProfile'
import { HeaderPage } from '../../components/HeaderPage';
import { ProfilePost } from '../../components/ProfilePost'
import { useNavigate } from 'react-router-dom';

import './styles.css';

export const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (false == true) {
            navigate('/signIn');
        }
    });

    return (
        <div>
            <HeaderPage />
            <HeaderProfile />
            <ProfilePost />
        </div>
    );
};