import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Products } from '../Products'
import { Component } from 'react';
import './styless.css';

export class Home extends Component {
    state = {
        page: 0,
    };

    render() {
        const { page } = this.state;
        const auth = getAuth();

        return (
            <h1>adasd</h1>
        );
        // onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         // User is signed in, see docs for a list of available properties
        //         // https://firebase.google.com/docs/reference/js/auth.user
        //         const uid = user.uid;
        //         // ...
        //     } else {
        //         // User is signed out
        //         // ...
        //     }
        // });
    }
}