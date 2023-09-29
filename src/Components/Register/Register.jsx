import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../assets/FireBase/FireBase.config";
import { useState } from "react";
import { AiFillEye } from 'react-icons/ai';
import { BsEyeSlashFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerDone, setRegisterDone] = useState('');
    const [showPassword, setShawPassword] = useState(false);
    const handelRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accept = e.target.terms.checked;
        setRegisterError('')
        setRegisterDone('')
        if (password.length < 6) {
            setRegisterError("Password should be at least 6 Characters Or Longer");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Your Password should have at least one upper case characters");
            return;
        }
        else if (!accept) {
            setRegisterError("Click Check Box");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setRegisterDone("User Register Successfully ...")
                console.log(result.user)
                sendEmailVerification(result.user)
                    .then(() => {
                        alert("Please check your email and verification account")
                    });


            })
            .catch(error => {
                setRegisterError('Sorry.... email-already-in-use');
                console.log(error);
            })
    }
    return (
        <div>
            <div className="container mx-auto r ">
                <div className="mx-[10%]">
                    <h1 className="text-green-600 text-3xl font-bold"> Please Register </h1>
                    <form onSubmit={handelRegister}>
                        <input className="p-2 bg-gray-200 font-semibold text-xl rounded-md my-3 w-2/5 " type="email" name="email" id="" placeholder="Enter your Email" required /> <br />
                        <input className="p-2 bg-gray-200 font-semibold text-xl rounded-md my-3 w-2/5 relative " type={showPassword ? 'text' : "password"} name="password" id="" placeholder="Enter your Password" required /><span onClick={() => setShawPassword(!showPassword)} className="absolute -ml-10 mt-5">{showPassword ? <AiFillEye className="text-2xl text-blue-600"></AiFillEye  > : <BsEyeSlashFill className="text-2xl text-blue-600"></BsEyeSlashFill>}</span><br />
                        <input className="w-[12px] my-3" type="checkbox" name="terms" id="terms" />
                        <label className="mx-3" >Accept our <a href="">Terms and Conditions</a></label>
                        <br />
                        <input className="p-2 bg-green-800 text-white font-semibold text-xl rounded-md my-3 mx-[14%]" type="submit" value="Register" />
                        <p>Already Have a Account Please <Link to="/login">Login?</Link></p>
                    </form>
                    {
                        registerDone ? <h1 className="text-2xl font-bold text-green-600 mx-[5%]">{registerDone}</h1> : <h1 className="text-2xl font-medium text-red-600 mx-[5%]">{registerError}</h1>
                    }

                </div>
            </div>
        </div>
    );
};

export default Register;