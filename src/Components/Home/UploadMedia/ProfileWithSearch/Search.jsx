import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../Context/AuthContext';

const Search = () => {
    const { user } = useContext(userContext);
    const [dbuser, setDbuser] = useState("");
    useEffect(() => {
        fetch(`https://golden-glimmers-server-emonkumardas.vercel.app/users/${user?.email}`).then(res => res.json()).then(result => setDbuser(result))
    }, [])
    return (
        <div className='flex p-5 gap-5'>
            <Link className=''>
                <div className="avatar-group -space-x-6">
                    <div className="avatar">
                        <div className="w-12">
                            <img src={dbuser?.ProfilePhoto} alt="" />
                        </div>
                    </div>
                </div>
            </Link>
            <div className='py-2'>
                <input type="text" disabled placeholder={`What's on your mind, ${dbuser.name}?`} className="input lg:w-[40vw] md:w-[45vw] w-[70vw] h-10 rounded-3xl bg-[#3a3b3c]" />
            </div>
        </div>
    );
};

export default Search;