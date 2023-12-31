import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const {login} = useContext(AuthContext)
    const notify = () => toast.error("Invalid Credentials")
    const successNotify = () => toast.success("Login Successful")
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password }
        console.log(user);

        login(email, password)
        .then(res => {
            console.log(res.user)
            successNotify()
        })
        .catch(error => {
            if(error){
               notify()
            }
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Toaster/>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="text-center">
                            <p>Don't have an account <Link to={'/login'} className="text-[#EB0029]">Sign Up</Link> here</p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;