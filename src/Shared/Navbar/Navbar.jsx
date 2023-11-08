import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../public/logo-white.svg'
import { AuthContext } from '../../Auth/AuthProvider';
import userImg from '../../../public/userimg.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const {photoURL} = user;

    const navLinks =
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#EB0029]" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/allfoods"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    All Food Items
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/signup"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Signup
                </NavLink>
            </li>
            <li>
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={photoURL ? photoURL  : "/userimg.png" } />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#010F1C] rounded-box w-52">
                                <li>
                                    <Link to={'/profile'} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a onClick={()=>logOut()}>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <Link to={'/login'}><button className='btn'>Log IN </button></Link>
                }
            </li>

        </>
    return (
        <div className='max-w-7xl mx-auto '>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="flex-none hidden lg:block text-white">
                            <ul className="flex gap-4 items-center">
                                {/* Navbar menu content here */}
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-30">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#010F1C] text-white">
                        {/* Sidebar content here */}
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;