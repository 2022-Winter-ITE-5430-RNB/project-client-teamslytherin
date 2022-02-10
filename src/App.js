import logo from './logo.svg';
import Header from './Components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import FAQ from './Components/FAQ/FAQS';

function App() {
  return (
    <>
    <Header></Header>
    <FAQ></FAQ>
    <Footer/>
    </>
  );
}

export default App;
