import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { el } from 'date-fns/locale';
import { faL } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [login,setLogin]=useState(false);
  const [admin,setAdmin]=useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
useEffect(()=>{
  if(localStorage.getItem('isLogin')){
    setLogin(true)
  }
  else{
    setLogin(false)
  }
})
useEffect(()=>{
  if(localStorage.getItem('admin')){
    setAdmin(true)
  }
  else{
    setAdmin(false)
  }
})
const logout=()=>{
  localStorage.removeItem('admin');
  localStorage.removeItem('isLogin');
  localStorage.removeItem('username');
  window.location.reload(true)
}

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            StaySpotter
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/guidelines'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Guidelines
              </Link>
            </li>
            {admin ?<li className='nav-item'>
              <Link
                to='/admin-options'
                className='nav-links'
              >
                Admin Potral
              </Link>
            </li>: ""}
          </ul>
          {login ?<p className='username'>{localStorage.getItem('username')}<br/><p className='logout' onClick={logout}>Logout</p></p>: button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;