"use client"
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const warningx = " Don't Have a Acoount "

    return (
        <section className="w-full flex justify-center items-center px-5 py-36">
            <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
                <h1 className="text-5xl font-semibold text-slate-200 text-center">Login To AiNrzy</h1>
                <form action="" className="flex flex-col justify-start items-center gap-3 p-5 rounded-md border-2 border-sky-700 mt-7">
                    <label htmlFor="" className="text-xl text-slate-200 font-medium self-start">Username or Email</label>
                    <input type="text" placeholder="Username or Email" required className="px-5 py-3 font-medium text-slate-200 outline-none rounded-lg card"/>
                    <label htmlFor="" className="text-xl text-slate-200 font-medium self-start">Password</label>
                        <input type={showPassword ? 'password' : 'text'} placeholder="Password" required className="px-5 py-3 font-medium text-slate-200 outline-none rounded-lg card"/>
                        <div className="flex gap-1 self-start">
                            <input type="checkbox" className="form-checkbox card text-sky-700" onChange={togglePasswordVisibility}/>
                            <p className="font-medium text-slate-300 ml-2 cursor-pointer" onClick={togglePasswordVisibility}>Show Password</p>
                        </div>
                    <button className="bg-sky-700 hover:bg-sky-800 transition ease-in-out px-5 py-2 font-medium text-xl text-slate-200 rounded-lg w-full">Login</button>
                    <p className="font-medium self-start gap-1">{warningx}<Link href="/account/signup" className="underline text-sky-700">Signup</Link></p>
                </form>
            </div>
        </section>
    )
}

export default Login;