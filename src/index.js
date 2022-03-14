// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';

const express = require('express');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();

const FAQRoute = require('./routes/FAQRoutes');
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRoutes');

const app = express();

// connect to DB
connectDB();

//middleware work with incoming request
//set the middleware to parse the data
app.use(express.json());
 
//router to organize our routes
app.use('/api/FAQS', FAQRoute);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT | 5000;
app.listen(PORT, 'localhost', () => {
  console.log('Server is running');
});

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();