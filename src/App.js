import logo from './logo.svg';
import Header from './Components/Header';
import './App.css';
import '../src/assets/css/contact.css';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer';
import FAQS from './Components/FAQ/FAQS';


function App() {


  return (
    <>
      <Header></Header>
      <Footer />
    </>
  );
}

export default App;
