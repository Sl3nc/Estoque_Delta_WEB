import { useState } from 'react';

import { TopHeader } from '../../components/TopHeader';
import { Products } from '../../components/Products'
import { Profile } from '../../components/Profile'
import './styless.css';

export const Menu = () => {
    const [currentMenuPage, setMenuPage] = useState(<Products />);

    const handleChange = () => {
        setMenuPage(<Profile />)
        // {currentMenuPage.name != Profile.name && setMenuPage(<Products/>)}
    };

    return (
        <div>
            <TopHeader onClick={handleChange} />
            {currentMenuPage}
        </div>
    );
};