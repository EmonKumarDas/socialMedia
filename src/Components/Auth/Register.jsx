import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/AuthContext';
import Loader from '../Loader/Loader';
import Modal from './Modal';

const Register = () => {
    // const { googleSignIn } = useContext(userContext);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { googleSignIn, signIn } = useContext(userContext);
    const navigate = useNavigate();
    let studied = "";
    let location = "";
    const HandlegoogleLogin = () => {
        googleSignIn().then((result) => {
            const user = result.user.email;
            const users = result.user;
            const currentUser = { email: user };
            // insertUsers(user,users.photoURL,)
            navigate('/');
        })

    }

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

    const insertUsers = (name, email, ProfilePhoto, studied, location) => {
        const profile = {
            name, email, ProfilePhoto, studied, location
        }

        fetch('https://golden-glimmers-server-emonkumardas.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(result => { console.log(result) })
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
                {loading ? <div className='mx-[10%]'><Loader></Loader></div> : <button className="btn w-full p-3 text-center rounded-sm shadow-md dark:text-white dark:bg-orange-600">Login</button>}
                <label htmlFor="register" className="btn w-full p-3 font-bold tracking-wide rounded dark:bg-orange-600 text-lg dark:text-white">Create new user</label>
            </form>
            <div onClick={HandlegoogleLogin} className="my-6 space-y-4">
                <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Register;