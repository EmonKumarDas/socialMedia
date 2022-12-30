import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/AuthContext';
import Loader from '../Loader/Loader';
import Modal from './Modal';

const Register = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signIn } = useContext(userContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setLoading(true);
        signIn(email, password)
            .then((result) => {
                window.location.replace("/");
                setLoading(false);

            })
            .catch((error) => {
                setError("");
                const errorMessage = error.message;
                setError(errorMessage);
                setLoading(false);
            });
    }
    return (
        <div className="grid justify-center w-full lg:py-[8%] grid-cols-1 gap-8 px-8 py-16  rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2 my-14">
                    <h2 className="text-4xl font-bold text-center leading-tight text-orange-600 lg:text-5xl">Golden Glimmers</h2>
                    <div className="dark:text-gray-400 text-center text-2xl">Golden Glimmers helps you connect and share with the people in your life.</div>
                </div>
            </div>
            <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm">Email</label>
                    <input name="email" type="text" placeholder="Email" className="w-full p-3 border rounded dark:bg-gray-800" />
                </div>
                <div>
                    <label for="email" className="text-sm">Password</label>
                    <input name="password" type="password" placeholder='Password' className="w-full p-3 border rounded dark:bg-gray-800" />
                </div>
                <p className='font-bold text-red-700 text-center'>{error}</p>
                <button type="submit" className="w-full p-3 font-bold tracking-wide uppercase rounded dark:bg-orange-600 text-xl dark:text-white">{loading ? <Loader></Loader> : "Login"}</button>
                <label htmlFor="register" className="btn w-full p-3 font-bold tracking-wide rounded dark:bg-orange-600 text-lg dark:text-white">Create new user</label>
            </form>
            <Modal></Modal>
        </div>
    );
};

export default Register;