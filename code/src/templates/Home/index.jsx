import { Menu } from '../Menu';
import { SignIn } from '../SignIn';
import { Component } from 'react';
import './styless.css';

export class Home extends Component {
    state = {
        page: <SignIn />,
    };

    handlePage = () => {
        this.setState({ page: <Menu /> });
    };

    render() {
        const { page } = this.state;
        return (
            <div className='menu-container'>
                {page}
                <button onClick={this.handlePage}>Troca</button>
            </div>
        );
    }
}