import React from 'react'
import netflixLogo from '../assets/netflix-logo.png'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  
  const path = useLocation();
  const loginPath = path.pathname === "/login";

  return (
    <div className='relative mx-auto z-30 md:w-4/5 md:px-8 py-2 flex items-center justify-between'>
        <img className='w-48' src={netflixLogo} alt="Netflix Logo" />
        {!loginPath && <Link to={"/login"}>
          <button className="bg-red-700 text-white font-bold py-1 px-4 mx-4 rounded">
            Sign In
          </button>
        </Link>}
        
    </div>
  )
}

export default Header