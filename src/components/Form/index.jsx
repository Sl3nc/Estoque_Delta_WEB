import {useState} from 'react';
import './styless.css';

export const Form = ({ submit }) => {
    const [email, setEmail] = useState("");
    const [psswrd, setPsswrd] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email: ${email}\nSenha: ${psswrd}`)
        submit()
    }

    return (<section className='form'>
        <form action="" onSubmit={handleSubmit}>
            <label>Endereço de E-mail
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='exemplo@deltaprice.com'
                    required
                />
            </label>
            <label>Senha
                <input
                    type="password"
                    value={psswrd}
                    onChange={(e) => setPsswrd(e.target.value)}
                    required
                />
            </label>
            <input type="submit" value="Enviar" id='submit_btn' />
        </form>
    </section>
    );
};