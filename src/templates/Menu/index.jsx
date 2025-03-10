import { useState, useEffect } from 'react';

import { TopHeader } from '../../components/TopHeader';
import { Service } from '../../components/Service'
import { Profile } from '../../components/Profile'
import './styless.css';
import { fireAuth } from '../../utils/fire_auth';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
    const [menuPage, setMenuPage] = useState(<Service />);
    const [pageControl, setPageControl] = useState(true)
    const navigate = useNavigate();

    const handleChange = () => {
        pageControl !== true ? setMenuPage(<Service />) : setMenuPage(<Profile />);
        setPageControl(!pageControl)
    };

    useEffect(() => {
        navigate(fireAuth());
    });

    return (
        <div>
            <TopHeader onClick={handleChange} />
            {menuPage}
        </div>
    );
};