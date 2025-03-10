import { Menu } from '../Menu';
import { SignIn } from '../SignIn';
import { Component } from 'react';
import './styless.css';

export class App extends Component {
    state = {
        login: true,
    };

    handlePage = () => {
        this.setState({ login: true });
    };

    render() {
        const { login } = this.state;
        return (
            <div className='menu-container'>
                {login === false && <SignIn submit={this.handlePage}/>}
                {login === true && <Menu />}
            </div>
        );
    }
}