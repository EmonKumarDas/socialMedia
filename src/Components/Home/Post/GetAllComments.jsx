import React, { useEffect, useState } from 'react';

const GetAllComments = ({ commentId }) => {

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="getComments" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="getComments" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-2xl">Comments</h3>
                    <p className='border-b-[1px] py-1 w-full'></p>
                    {
                        commentId.map(comment => <div className="flex gap-2 m-2">
                            <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-800" src={comment.ProfilePhoto} />
                            <div className=''>
                                <p className='text-center bg-[#3a3b3c] p-2 rounded-tl-md rounded-tr-md rounded-bl-md'>{comment.comment}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default GetAllComments;