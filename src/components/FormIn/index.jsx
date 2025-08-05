import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../utils/firebaseApp';

import './styless.css';

export const FormIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPsswrd] = useState("");
    const [viewPswrd, setViewPswrd] = useState(false);
    const navigate = useNavigate()
    const auth = getAuth(app)

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                alert('Email ou senha inválidos!');
            });
    }

    return (
        <form>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" value={email}
                placeholder='Insira aqui o endereço'
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <label htmlFor="pswrd">Senha</label>
            <div id='pswrd_area'>

                <input type={viewPswrd ? 'text' : 'password'} name="pswrd"
                    placeholder="Insira a senha" size=""
                    value={password} onChange={(e) => { setPsswrd(e.target.value) }}
                />
                <input type="checkbox" onClick={() => { setViewPswrd(!viewPswrd) }} />
            </div>
            <button type='submit' onClick={handleSubmit}>Enviar</button>
        </form>
    );
};