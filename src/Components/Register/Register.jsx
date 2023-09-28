const Register = () => {
    const handelRegister =(e)=>{
        e.preventDefault()
        const email =e.target.email.value;
        const password =e.target.password.value; 
        console.log(email ,password);
    }
    return (
        <div>
            <div className="container mx-auto r ">
                <div className="mx-[10%]">
                    <h1 className="text-green-600 text-3xl font-bold"> Please Register </h1>
                    <form  onSubmit={handelRegister}>
                        <input className="p-2 bg-gray-200 font-semibold text-xl rounded-md my-3 w-2/5 " type="email" name="email" id="" placeholder="Enter your Email"  /> <br />
                        <input className="p-2 bg-gray-200 font-semibold text-xl rounded-md my-3 w-2/5" type="password" name="password" id="" placeholder="Enter your Password" /><br />
                        <input className="p-2 bg-green-800 text-white font-semibold text-xl rounded-md my-3 mx-[14%]" type="submit" value="Register" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;