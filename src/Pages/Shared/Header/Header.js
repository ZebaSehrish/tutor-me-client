import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaPython, FaUser } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-300  justify-between">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="form-control">
                            <label className="label cursor-pointer">remember
                                <input type="checkbox" className="toggle toggle-primary" checked />
                            </label>
                        </li>
                        <li><Link to='/'>Courses</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signUp'>Sign up</Link></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <div>
                        <Link className="btn btn-ghost normal-case text-3xl" to='/'><FaPython></FaPython>Tutor me</Link>
                    </div>

                </div>

            </div>
            <div>
                <div className="navbar-center hidden lg:flex ml-10">
                    <ul className="menu menu-horizontal p-0 ">
                        <li className="form-control">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="toggle toggle-primary" />
                            </label>
                        </li>
                        <li><Link to='/'>Courses</Link></li>

                        <li><Link>FAQ</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            user?.uid ?
                                <>

                                    <li><button onClick={handleLogOut} className='ms-2'>Log Out</button></li>
                                </>
                                :
                                <>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/signUp'>Sign Up</Link></li>
                                </>
                        }

                    </ul>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    </div>
                    <div className="dropdown dropdown-end">
                        {
                            user ?
                                <div className="tooltip tooltip-left tooltip-info" data-tip={user.displayName}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar " >
                                        <div className=" rounded-full">
                                            {
                                                user?.photoURL ?
                                                    <img className='w-10' src={user.photoURL} alt='' />
                                                    :
                                                    <FaUser></FaUser>
                                            }
                                        </div>
                                    </label>
                                </div>
                                :
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar " >
                                    <div className=" rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img className='w-10' src={user.photoURL} alt='' />
                                                :
                                                <FaUser></FaUser>
                                        }
                                    </div>
                                </label>
                        }
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                        </ul>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default Header;