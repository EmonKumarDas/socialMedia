import React, { useContext } from 'react';
import { useState } from 'react';
import { userContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
const Modal = () => {
    const { createUser, updateUserProfile } = useContext(userContext)

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    let studied = "";
    let location = "";
    const handleRegister = (e) => {
        e.preventDefault();
        const user = e.target.name.value;
        const email = e.target.email.value;
        const file = e.target.image.files[0];
        const password = e.target.password.value;
        const formdata = new FormData();
        formdata.append("image", file);
        setLoading(true);
        const url = 'https://api.imgbb.com/1/upload?key=86830ec939155f6ba441bf07114942ed';
        fetch(url, {
            method: "POST",
            body: formdata
        })
            .then(res => res.json())
            .then(result => {
                const photoURL = result.data.display_url;
                createUser(email, password).then(result => {
                    const userProfile = {
                        displayName: user, photoURL
                    }
                    updateUserProfile(userProfile).then(result => {
                        insertUsers(user, email, photoURL, studied, location);
                        e.target.name.value = "";
                        e.target.email.value = "";
                        e.target.password.value = "";
                        navigate('/')
                    })
                    setLoading(false);
                }).catch(err => {
                    console.log(err.message);
                    setLoading(false);
                })
            });
    }

    const insertUsers = (name, email, ProfilePhoto, studied, location) => {
        const profile = {
            name, email, ProfilePhoto, studied, location
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(result => { })
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="register" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="register" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:text-gray-100">
                        <h1 className="text-2xl font-bold">Sign Up</h1>
                        <p className='text-gray-500 border-b-2 py-2'>it's quick and easy</p>

                        <form onSubmit={handleRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <label for="username" className="block dark:text-gray-400">Username</label>
                                <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-indigo-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label for="username" className="block dark:text-gray-400">Email</label>
                                <input type="text" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-indigo-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full" />
                            </div>

                            <div className="space-y-1 text-sm">
                                <label for="password" className="block dark:text-gray-400">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-indigo-400" />
                            </div>
                            <button className="btn w-full p-3 text-center rounded-sm shadow-md dark:text-white dark:bg-orange-600">{loading ? <Loader></Loader> : "Sign in"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;