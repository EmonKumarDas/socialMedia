import React, { useState } from 'react';
import ConnectedUser from '../../../../../Hook/ConnectedUser';
import Loader from '../../../../Loader/Loader';


const Modal = () => {
    const [dbuser] = ConnectedUser();

    const [loading, setLoading] = useState(false);
    const like = 0;
    const handlePost = (e) => {
        e.preventDefault();
        const post = e.target.post.value;
        const file = e.target.image.files[0];
        const formdata = new FormData();
        formdata.append("image", file);
        setLoading(true);
        const url = 'https://api.imgbb.com/1/upload?key=8520144a74a90809e3b2d463b38c79ea';
        fetch(url, {
            method: "POST",
            body: formdata
        }).then(res => res.json()).then(result => {
            const postimage = result.data.display_url;
            insertUsers(dbuser?.name, postimage, dbuser?.ProfilePhoto, post, dbuser?.email, like);
            setLoading(false);
        });
    }

    const insertUsers = (name, postimage, ProfilePhoto, post, email, like) => {
        const profile = {
            name, postimage, ProfilePhoto, post, email, like
        }
        console.log(profile);
        fetch('https://golden-glimmers-server-emonkumardas.vercel.app/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                window.location.reload();
            })
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="photo" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="photo" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-2xl">Create Post</h3>
                    <p className='border-b-[1px] py-1 w-full'></p>

                    <div className='flex py-2'>
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-14">
                                    <img src={dbuser?.ProfilePhoto} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='py-5'>
                            <p className='font-bold font-mono'>{dbuser?.name}</p>
                        </div>
                    </div>

                    <form onSubmit={handlePost} action="">
                        <input type="text" name="post" placeholder="What's on your mind Imon?" className="input input-bordered rounded-xl input-lg w-full" />

                        <fieldset className="w-full py-2 dark:text-gray-100">
                            <div className="flex">
                                <input type="file" name="image" id="files" className="px-8 py-12 rounded-md w-full dark:border-gray-700 dark:text-gray-400 dark:bg-[#47494a]" />
                            </div>
                        </fieldset>

                        <button className="btn w-full font-bold bg-amber-800">{loading ? <Loader></Loader> : "Post"}</button>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default Modal;