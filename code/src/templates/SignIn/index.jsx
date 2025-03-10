import {Form} from '../../components/Form'
import {Banner} from '../../components/Banner'
import './styless.css';

export const SignIn = ({submit}) => (
  <div className='container-login'>
    <Banner/>
    <Form submit = {submit}/>
  </div>
  )