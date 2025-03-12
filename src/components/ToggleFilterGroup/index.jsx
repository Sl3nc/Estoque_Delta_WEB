import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import './styles.css'

export const ToggleFilterGroup = () => {
    const [value, setValue] = useState();
    const handleChange = (val) => setValue(val);

    return (
        <ToggleButtonGroup type="checkbox" className="mb-2" size='lg'
            id='filterGroup' value={value} onChange={handleChange}>
            <ToggleButton id="tbg-check-1" value={'soda'}>
                Refrigerante
            </ToggleButton>
            <ToggleButton id="tbg-check-2" value={'juice'}>
                Suco
            </ToggleButton>
            <ToggleButton id="tbg-check-3" value={'water'}>
                Água
            </ToggleButton>
            <ToggleButton id="tbg-check-4" value={'chips'}>
                Chips
            </ToggleButton>
            <ToggleButton id="tbg-check-5" value={'candy'}>
                Doces
            </ToggleButton>
        </ToggleButtonGroup>
    )
}