import { useState } from 'react';

import { TopHeader } from '../../components/TopHeader';
import { Products } from '../../components/Products'
import { Profile } from '../../components/Profile'
import './styless.css';

export const Menu = () => {
    const [MenuPage, setMenuPage] = useState(<Products />);
    const [pageControl, setPageControl] = useState(true)

    const handleChange = () => {
        pageControl != true ? setMenuPage(<Products/>) : setMenuPage(<Profile/>);
        setPageControl(!pageControl)
    };

    return (
        <div>
            <TopHeader onClick={handleChange} />
            {MenuPage}
        </div>
    );
};