import { SignInForm } from '../../components/SignInForm'
import { Banner } from '../../components/Banner'
import './styless.css';

export const SignIn = () => (
  <div className='container-login'>
    <Banner />
    <SignInForm />
  </div>
)