import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import { Page_Left, Page_Right, Head, Image, Form, Input, Button, Password } from './AuthStyling'
import pet1 from './Images/pet1.png'
import pet2 from './Images/pet2.png'
import pet3 from './Images/pet3.png'
import pet4 from './Images/pet4.png'

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFromDate] = useState({
    email: '',
    name: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;

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
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users',
        data,
        config
      );

      console.log(response);
      localStorage.setItem('token', response.data.token);
      console.log(decode(response.data.token));
      navigate('/');
    } catch (err) {
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
          <h1>Sign Up</h1>
          <h4>Create Your Account</h4>
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
              name='password2'
              minLength='4'
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div><br></br>
          <Button type='submit' value='Register' /><br></br>
          <h3>
            Already have an account? <Link to='/login'>Sign In</Link>
          </h3>
        </Form>
      </Page_Right>
    </>
  );
};

export default Register;
