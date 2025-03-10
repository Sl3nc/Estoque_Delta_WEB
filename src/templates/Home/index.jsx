import { useEffect } from 'react';

import { TopHeader } from '../../components/TopHeader';
import { HomePost } from '../../components/HomePost'
import { useNavigate } from 'react-router-dom';

import './styless.css';

export const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (false == true){
            navigate('/signIn');
        }
    });

    return (
        <div>
            <TopHeader />
            <HomePost />
        </div>
    );
};