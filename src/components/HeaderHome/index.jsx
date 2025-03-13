import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import './styles.css'

export const HeaderHome = ({ searchValue, handleChange }) => {
    return (
        <div id='headerHome'>
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
        </div>
    )
}