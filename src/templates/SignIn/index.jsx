import { Form } from '../../components/Form'
import { Banner } from '../../components/Banner'
import './styless.css';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate()

  const submit = (event) =>{
    navigate('/')
  }

  return (<div className='container-login'>
    <Banner />
    <Form submit={submit} />
  </div>
  )
}