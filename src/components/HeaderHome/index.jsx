import {ToggleFilterGroup} from '../ToggleFilterGroup'
import './styles.css'

export const HeaderHome = () => {
    return (
        <div id='headerHome'>
            <h2 id='home-title'>Produtos disponíveis</h2>
            <ToggleFilterGroup/>
        </div>
    )
}