import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderPage } from '../../components/HeaderPage';
import { HomePost } from '../../components/HomePost'
import { HeaderHome } from '../../components/HeaderHome';

import './styless.css';

export const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (false == true){
            navigate('/signIn');
        }
    });

    return (
        <>
            <HeaderPage />
            <HeaderHome/>
            <HomePost />
        </>
    );
};