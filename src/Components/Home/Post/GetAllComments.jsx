import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GetAllComments = () => {
    const comments = useLoaderData();
    return (
        <div>
            {
                comments.map(comment => <div className="flex gap-2 m-2">
                    <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-800" src={comment.ProfilePhoto} />
                    <div className=''>
                        <p className='text-center bg-[#3a3b3c] p-2 rounded-tl-md rounded-tr-md rounded-bl-md'>{comment.comment}</p>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default GetAllComments;