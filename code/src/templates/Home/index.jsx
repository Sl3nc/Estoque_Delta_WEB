import { Menu } from '../Menu';
import { SignIn } from '../SignIn';
import { Component } from 'react';
import './styless.css';

export class Home extends Component {
    state = {
        login: false,
    };

    handlePage = () => {
        this.setState({ login: true });
    };

    render() {
        const { login } = this.state;
        return (
            <div className='menu-container'>
                {login === false && <SignIn />}
                {login === true && <Menu />}
                <button onClick={this.handlePage}>Troca</button>
            </div>
        );
    }
}