import { useEffect } from 'react';
import {Greeting} from '../../components/Greeting'
import { TopHeader } from '../../components/TopHeader';
import { ProfilePost } from '../../components/ProfilePost'
import { useNavigate } from 'react-router-dom';

import './styles.css';

export const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (false == true){
            navigate('/signIn');
        }
    });

    return (
        <div>
            <TopHeader />
            <Greeting/>
            <ProfilePost />
        </div>
    );
};