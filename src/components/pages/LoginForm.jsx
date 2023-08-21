import NavBar from './NavBar';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../util/api';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [login, setLogin] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function getLogin(){
    setLogin(true);
    try{
      const response = await login();
      setLogin(login);

    }
  }
  login();
 

  const loginHandler = async (e) => {
    e.preventDefault();

    if(result.sucess) {
      localStorage.setItem('auth-token', result.data.token)
      navigate('/profiles')
    }
  }
  return (
    <div className="login">
    <NavBar />
     Login
    
    </div>
  );
}

export default LoginForm;






// // Login In 
// // Username 
// // Password  
// //LON IN  (button)  
// // Don't have an account?Sign Up

