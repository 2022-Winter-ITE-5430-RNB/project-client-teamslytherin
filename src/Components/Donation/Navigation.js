import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';


const Navigation = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();   

  const onLogout = async (e) => {
    e.preventDefault();
    // const auth = useContext(AuthContext);
    // const navigate = useNavigate();    
    auth.logout();
    navigate('/');
}
  return (
    <nav>
      <ul>
        {auth.isLoggedIn ? (
          <>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='PetDetails'>Pet Details</Link>
            </li>
            <li>
              <Link to='Raise'>Raise</Link>
            </li>
            <li>
              <Link to='Clinics'>Clinics</Link>
            </li>
            <li>
              <Link to='Rehome'>Rehome</Link>
            </li>
            <li>
              <Link to='FAQS'>FAQS</Link>
            </li>
            <li>
              <Link to='Events'>Events</Link>
            </li>
            <li>
              <Link to='Donation'>Donation</Link>
            </li>
            <li>
              <Link to='About'>About</Link>
            </li>
            <li>
              <Link to='Contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='Logout' onClick={(e) => onLogout(e)}>Logout</Link>
            </li>
          </>
        ) : (
          <>
          
            <li>
              <Link to='/'>Login</Link>
            </li>
            <li>
              <Link to='Register'>Register</Link>
            </li>
            <li>
              <Link to='Donation'>Donation</Link>
            </li>
            <li>
              <Link to='About'>About</Link>
            </li>
            <li>
              <Link to='Contact'>Contact Us</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
