import React, { useState } from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
const Navbar = (props) => {
    let isloggedin = props.isLoggedIn;
    let setisloggedin = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-1 mx-auto'>
        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>
        </Link>
        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
            {!isloggedin &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-whitr py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100 text-center'>Log in</button>
                </Link>
            }
            {!isloggedin &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-whitr py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100 text-center'>Sign Up</button>
                </Link>
            }
            {isloggedin &&
                <Link to="/">
                    <button className='bg-richblack-800 text-whitr py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100 text-center' onClick={()=>{
                        setisloggedin(false);
                        toast.success("Logged Out")
                    }}>Log Out</button>
                </Link>
            }
            {isloggedin &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-whitr py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100 text-center'>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar;