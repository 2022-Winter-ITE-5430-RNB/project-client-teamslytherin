import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import { Head, Page_Left, Page_Right, Image,  Form, Input, Button, Password, Error } from './AuthStyling'
import AuthContext from '../../Context/AuthContext';
import pet1 from './Images/pet1.png'
import pet2 from './Images/pet2.png'
import pet3 from './Images/pet3.png'
import pet4 from './Images/pet4.png'

const Login = () => {

  const auth = useContext(AuthContext);
  const [err_message, set_err_message] = useState('');

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth',
        data,
        config
      );
      console.log(response);
      console.log(decode(response.data.token));
      // console.log(response.errors.msg);
      localStorage.setItem('token', response.data.token);
      auth.login();
      navigate('/');
    } catch (err) {            
      set_err_message(err.response.data.errors);
      console.log(err);      
    }
  };
    
  return (
    <>
      <Page_Left>
        <br></br><br></br><br></br>
        <Head>Welcome to Adopet</Head> 
        <Image src={pet1}/>   
        <Image src={pet2}/>   
        <Image src={pet3}/>   
        <Image src={pet4}/>
      </Page_Left>
      <Page_Right>
        <Form onSubmit={(e) => onSubmit(e)}>
          <h1>Sign In:</h1><br></br>
          <div>
            <Input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br></br>
          <div>
            <Password
              type='password'
              placeholder='Password'
              name='password'
              minLength='4'
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br></br>
          <Button type='submit' value='Login' /><br></br>
          <h3>
            <Link to='/register'>Register</Link> as a new User
          </h3>          
          <Error>
            {err_message}
          </Error>
        </Form>
      </Page_Right>
    </>
  );
};

export default Login;
