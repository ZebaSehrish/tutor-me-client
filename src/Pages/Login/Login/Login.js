import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLoginSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-40 ">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-gray-300 text-black"><FaGoogle className='mr-2 text-blue-600'></FaGoogle>Sign in with Google</button>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-gray-300 text-black"><FaGithub className='mr-2'></FaGithub>Sign in with Github</button>
                                </div>
                                <div className=" mt-6">
                                    New to this website? Please  <Link to='/signUp' className="btn btn-primary bg-gray-300 text-black">Register </Link>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;