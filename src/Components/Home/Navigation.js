import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='About'>About</Link>
        </li>
        <li>
          <Link to='Contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='FAQS'>FAQS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
