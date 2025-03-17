import { useState, useEffect } from 'react';

import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'

import './styles.css'

export const HeaderHome = ({ searchValue, handleChange }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const recursiveOptions = [
        <ToggleButton id="tbg-check-3" value={'water'}>
            Água
        </ToggleButton>,
        <ToggleButton id="tbg-check-4" value={'chips'}>
            Chips
        </ToggleButton>,
        <ToggleButton id="tbg-check-5" value={'candy'}>
            Doces
        </ToggleButton>
    ]

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id='headerHome'>
            {/* <p>The width of the screen is: {width}px</p>{" "} */}
            <h2 id='home-title'>Produtos disponíveis</h2>
            <ToggleButtonGroup type="radio" name="options"
                className="mb-2" size='lg' id='filterGroup'
                value={searchValue} onChange={handleChange}>
                <ToggleButton id="tbg-check-0" value={''}>
                    Todos
                </ToggleButton>
                <ToggleButton id="tbg-check-1" value={'soda'}>
                    Refrigerante
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={'juice'}>
                    Suco
                </ToggleButton>
                {width > 590 && recursiveOptions}
            </ToggleButtonGroup>
            <ToggleButtonGroup type="radio" name="options"
                className="mb-2" size='lg' id='filterGroup'
                value={searchValue} onChange={handleChange}>
                {width <= 590 && recursiveOptions}
            </ToggleButtonGroup>
        </div>
    )
}