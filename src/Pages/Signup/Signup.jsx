import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Signup = () => {
    const {createUser} = useContext(AuthContext)
    const [regError, setRegError] = useState("");
    const notify = () => toast.success("Registration Successful")
    console.log(createUser);
    const handleSignUp = e => {
        e.preventDefault();
        setRegError("");
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{6,}$/.test(
              password
            )
          ) {
            setRegError(
              "Password should be 6 characters, uppercase, lowercase & special characters"
            );
            return;
          }
        const user = { name, image, email, password }
        console.log(user);

        createUser(email, password)
        .then(res =>{
            if(res){
                notify()
            }
        })
        .catch(error => {
            console.log(error)

        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Toaster/>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name="image" placeholder="URL" className="input input-bordered" required />
                        </div>
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
                        <label className="label">
                  {regError && <p className="text-red-700">{regError}</p>}
                </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="text-center">
                            <p>Already have an account <Link to={'/login'} className="text-[#EB0029]">SignIn</Link> here</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;