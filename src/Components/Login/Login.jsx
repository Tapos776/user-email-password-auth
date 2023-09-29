import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../assets/FireBase/FireBase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";



const Login = () => {
    const [user, setUser] = useState('')
    const [error, setError] = useState('');
    const emailRef = useRef(null);
    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        setUser('')
       signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                
                if(result.user.emailVerified){
                    setUser('success')
                }else{
                    alert("Please verify your email Address")
                }
            })
            .catch((error) => {
                setError('Do NOt More Used')

            });
    }
    const handelForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert("Sent reser Email")
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert("Write a Valid Email")
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("thanks")
            })
            .catch((error) => {
               console.log(error);
            });
    }

    return (
        <div>
            <div className="">
                <div className="container mx-auto">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handelLogin}>
                        <div className="card   max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a onClick={handelForgetPassword} href="#" className="label-text-alt link link-hover" >Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="p-2 bg-green-800 text-white font-semibold text-xl rounded-md my-3 mx-[14%]" type="submit" value="Login" />
                                </div>
                                <p>New to This Website Please <Link to="/register">Register</Link></p>
                            </div>
                        </div>
                    </form>
                    <div>
                        {
                            user ? <p className="text-green-700">{user}</p > : <p className="text-red-700">{error}</p>
                        }
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Login;