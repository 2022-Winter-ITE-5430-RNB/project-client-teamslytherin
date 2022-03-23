import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import { Form, Input, Button } from './AuthStyling'

const Login = () => {
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
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form onSubmit={(e) => onSubmit(e)}>
      <h1>Sign In</h1><br></br>      
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
          <Input
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
          <Link to='/register'>Register</Link>
        </h3>
      </Form>
    </>
  );
};

export default Login;
