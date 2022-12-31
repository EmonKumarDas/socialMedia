import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';

const EditModal = ({ updateData }) => {
    const { name, ProfilePhoto, location, studied, _id } = updateData;
    const [loading, setLoading] = useState(false);
    const handleUpdate = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const studied = event.target.studied.value;
        const location = event.target.location.value;

        const updatedValue = { name, studied, location };
        setLoading(true);
        fetch(`https://golden-glimmers-server-emonkumardas.vercel.app/userinfo/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedValue)

        }).then(res => res.json()).then(result => {
            console.log(result);
            window.location.reload();
            setLoading(false)
        })
    }


    // const [param, setParam] = useState('');
    // const [value, SetValue] = useState('');

    // const { refetch } = useQuery(['myData', param], () =>
    //     fetch(`https://golden-glimmers-server-emonkumardas.vercel.app/userinfo/${param}`, {
    //         method: 'PUT',

    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(value)
    //     })
    //         .then(response => response.json()),
    //     {
    //         refetchOnWindowFocus: true
    //     }
    // );

    // function handleUpdate(event) {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     const studied = event.target.studied.value;
    //     const location = event.target.location.value;
    //     setParam(_id);
    //     const updatedValue = { name, studied, location };
    //     SetValue(updatedValue);
    //     refetch();
    // }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="update" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="update" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-2xl">Update Info</h3>
                    <p className='border-b-[1px] py-1 w-full'></p>

                    <form onSubmit={handleUpdate} action="">
                        <input type="text" name="name" defaultValue={name} placeholder="name" className="my-2 input input-bordered rounded-xl input-lg w-full" />
                        <input type="text" name="studied" defaultValue={studied} placeholder="studied" className="my-2 input input-bordered rounded-xl input-lg w-full" />
                        <input type="text" name="location" defaultValue={location} placeholder="location" className="my-2 input input-bordered rounded-xl input-lg w-full" />

                        {/* <fieldset className="w-full py-2 dark:text-gray-100">
                            <div className="flex">
                                <input type="file" name="image" id="files" className="px-8 py-12 rounded-md w-full dark:border-gray-700 dark:text-gray-400 dark:bg-[#47494a]" />
                            </div>
                        </fieldset> */}
                        <div className="modal-action">
                            <button className="btn w-full font-bold bg-amber-800">{loading ? "Loading..." : "Upadate"}</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default EditModal;