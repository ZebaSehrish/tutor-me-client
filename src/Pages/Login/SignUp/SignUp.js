import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                // handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-40">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full name:</span>
                                    </label>
                                    <input type="text" name='fullName' placeholder="Your full name" className="input input-bordered" required />
                                </div>
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
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign up</button>
                                </div>

                                <div className=" mt-6">
                                    Already have an account? Please  <Link to='/login' className="btn btn-primary bg-gray-300 text-black">Login</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;