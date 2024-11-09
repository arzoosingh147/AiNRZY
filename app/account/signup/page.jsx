"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowSuccessMessage(true);
    };

    useEffect(() => {
        if (showSuccessMessage) {
            const interval = setInterval(() => {
                setUsername('');
                setEmail('');
                setPassword('');
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [showSuccessMessage]);

    return (
        <section className="w-full flex justify-center items-center px-5 py-36">
            <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
                <h1 className="text-5xl font-semibold text-slate-200 text-center">SignUp To AiNrzy</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-start items-center gap-3 p-5 rounded-md border-2 border-sky-700 mt-7">
                    <label htmlFor="" className="text-xl text-slate-200 font-medium self-start">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Username" className="px-5 py-3 font-medium text-slate-200 outline-none rounded-lg card"/>
                    <label htmlFor="" className="text-xl text-slate-200 font-medium self-start">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="px-5 py-3 font-medium text-slate-200 outline-none rounded-lg card"/>
                    <label htmlFor="" className="text-xl text-slate-200 font-medium self-start">Password</label>
                        <input type={showPassword ? 'password' : 'text'} value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="px-5 py-3 font-medium text-slate-200 outline-none rounded-lg card"/>
                        <div className="flex gap-1 self-start">
                            <input type="checkbox" className="form-checkbox card text-sky-700" onChange={togglePasswordVisibility}/>
                            <p className="font-medium text-slate-300 ml-2 cursor-pointer" onClick={togglePasswordVisibility}>Show Password</p>
                        </div>
                    <button className="bg-sky-700 hover:bg-sky-800 transition ease-in-out px-5 py-2 font-medium text-xl text-slate-200 rounded-lg w-full">Signup</button>
                    <p className="font-medium self-start">Already Have an Account? <Link href="/account/login" className="underline text-sky-700">Login</Link></p>
                </form>
                {showSuccessMessage && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
                        <div className="card p-8 rounded-lg text-center">
                            <p className="text-xl font-medium text-slate-300">Your account will be activated in 3 days.</p>
                            <button onClick={() => setShowSuccessMessage(false)} className="mt-4 bg-sky-700 hover:bg-sky-800 transition ease-in-out px-5 py-2 font-medium text-xl text-white rounded-lg">Close</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default SignUp;