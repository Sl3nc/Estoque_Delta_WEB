import { useState } from 'react';

import { TopHeader } from '../../components/TopHeader';
import { Service } from '../../components/Service'
import { Profile } from '../../components/Profile'
import './styless.css';

export const Menu = () => {
    const [menuPage, setMenuPage] = useState(<Service />);
    const [pageControl, setPageControl] = useState(true)

    const handleChange = () => {
        pageControl !== true ? setMenuPage(<Service/>) : setMenuPage(<Profile/>);
        setPageControl(!pageControl)
    };

    return (
        <div>
            <TopHeader onClick={handleChange} />
            {menuPage}
        </div>
    );
};