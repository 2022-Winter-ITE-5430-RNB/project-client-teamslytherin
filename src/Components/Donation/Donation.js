import React, { useState, useEffect } from 'react';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Search from './Search';
import { PageLeft, PageRight, DonationHeading, Head1, Image, Form, Input, Button, Error, EachDonation, AllDonations } from './DonationStyling'
import donationDog from './DonationImages/donationDog.jpg'

const Donations = () => {
  const navigate = useNavigate();

  const [error_message, set_error_message] = useState('');

  const [search, setSearch] = useState('');
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    sendApiRequest();
  }, []);

  const sendApiRequest = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/donations'
      );
      setDonations(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const filterTask = (searchTerm) => {
    searchTerm ? setSearch(searchTerm) : setSearch('');
  };

  const [formData, setFromDate] = useState({
    name: '',
    email: '',
    CreditCard: '',
    Donation: '',
  });
  const { name, email, CreditCard, Donation } = formData;

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
      CreditCard: CreditCard,
      Donation: Donation,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/donations',
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
      <PageLeft>
        <Head1>Welcome to Donation box</Head1>

        <Image src={donationDog} />

        <AllDonations>

          <DonationHeading> Donators </DonationHeading>
          <br></br>
          <Search onSearch={filterTask} />
          <br></br>
          {donations
            .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
            .map((donations) => {
              return (
                <EachDonation>
                  <table>
                    <tr>
                      Donation Name: {donations.name}
                    </tr>
                    <tr>
                      Donation Email: {donations.email}
                    </tr>
                    <tr>
                      Donation: {donations.Donation}
                    </tr>
                  </table>
                </EachDonation>
              )
            })
          }
        </AllDonations>
      </PageLeft>

      <PageRight>
        <Form onSubmit={(e) => onSubmit(e)}>
          <h3>Make Your donation</h3><br></br>
          <div>
            <Input
              type='text'
              placeholder='Name'
              name='name'
              require
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
            <Input
              type='text'
              placeholder='Credit Card'
              name='CreditCard'
              minLength='16'
              value={CreditCard}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br></br>

          <div>
            <Input
              type='text'
              placeholder='Donation'
              name='Donation'
              minLength='1'
              value={Donation}
              onChange={(e) => onChange(e)}
            />
          </div><br></br>

          <Button type='submit' value='Donate' /><br></br>

          <Error>
            {error_message}
          </Error>
        </Form>
      </PageRight>
    </>
  );
};

export default Donations;