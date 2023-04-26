import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <React.Fragment>
    
    <div className='flex gap-5'>
              
              <div  >
                          {
                              user?.uid?
                              <>
                             
                              <button className='btn btn-sm px-10 bg-transparent text-black border border-[#6F57E9] normal-case hover:bg-[#6F57E9] hover:text-white' onClick={ handleLogOut} >$</button>
                              </>
                              :
                              <>
                              <Link className='btn btn-sm px-10 bg-[#6F57E9] border border-[#6F57E9] text-white hover:text-black hover:bg-transparent hover:border-[#6F57E9] normal-case  tracking-wider' to='/login'>Login</Link>
                              
                              </>
                          }
                          </div>
      
                          <div>
      
                          {
                              user?.uid?
                              <>
                             
                              <button onClick={ handleLogOut} >Log out</button>
                              </>
                              :
                              <>
                              <Link className='btn btn-sm px-10 bg-transparent text-black border border-[#6F57E9] normal-case hover:bg-[#6F57E9] hover:text-white' to='/login'>Learn more</Link>
                              
                              </>
                          }
                          </div>
              </div>
    
</React.Fragment>
    return (
        <div className="navbar md:top[-70] relative bg-gradient-to-r from-transparent to-indigo-600/10  font-bold flex justify-between">
        <div className="navbar-start">
        <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <Link to="/" className="normal-case text-xl "><span className=' font-light text-2xl lg:text-3xl font-serif'>Ship<span className='text-[#6F57E9]'>mate.</span></span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  p-0">
                {menuItems}
            </ul>
        </div>
      
    </div>
    );
};

export default Header;