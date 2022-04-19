import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import { Page_Left, Page_Right, Head, Image, Form, Input, Button, Password, Error } from './AuthStyling'
import pet1 from './Images/pet1.png'
import pet2 from './Images/pet2.png'
import pet3 from './Images/pet3.png'
import pet4 from './Images/pet4.png'

const Register = () => {
  const navigate = useNavigate();

  const [error_message, set_error_message] = useState('');

  const [formData, setFromDate] = useState({
    email: '',
    name: '',
    password: '',
    confirm_password: '',
  });
  const { name, email, password, confirm_password } = formData;

  const onChange = (e) => {
    setFromDate({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data = {
      name: name,
      email: email,
      password: password,
      confirm_password: confirm_password,
    };
    try {
      const response = await axios.post(
        'https://ado-pet-server.herokuapp.com/api/users',
        data,
        config
      );

      console.log(response);
      localStorage.setItem('token', response.data.token);
      console.log(decode(response.data.token));
      navigate('/');
    } catch (err) {     

      console.log(err.response);
      if (typeof err.response.data.errors[0].msg !== 'undefined') {
        console.log("error 1");        
        set_error_message(err.response.data.errors[0].msg);
        console.log(err.response.data.errors[0].msg);
      }
      else {
        console.log("error 2");
        set_error_message(err.response.data.errors);
        console.log(err.response.data.errors);
      }
    }
  };
  return (
    <>
      <Page_Left>
        <br></br><br></br><br></br>
        <Head>Welcome to Adopet</Head>
        <Image src={pet1} />
        <Image src={pet2} />
        <Image src={pet3} />
        <Image src={pet4} />
      </Page_Left>
      <Page_Right>
        <Form onSubmit={(e) => onSubmit(e)}>
          <h1>Sign Up:</h1>
          <h3>Create Your Account</h3><br></br>
          <div>
            <Input
              type='text'
              placeholder='Name'
              name='name'
              required
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br></br>
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
          <div>
            <Password
              type='password'
              placeholder='Confirm Password'
              name='confirm_password'
              minLength='4'
              value={confirm_password}
              onChange={(e) => onChange(e)}
            />
          </div><br></br>
          <Button type='submit' value='Register' /><br></br>
          <h3>
            Already have an account? <Link to='/login'>Sign In</Link>
          </h3>
          <Error>
            {error_message}
          </Error>
        </Form>
      </Page_Right>
    </>
  );
};

export default Register;
