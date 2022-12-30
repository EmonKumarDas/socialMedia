import React from 'react';
import { FaLevelDownAlt } from "react-icons/fa";
const HideComments = () => {
    return (

        <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-gray-400">
                Show more comments<FaLevelDownAlt></FaLevelDownAlt>
            </div>
            <div className="collapse-content flex gap-2">
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                <div className=''>
                    <p className='text-center bg-[#3a3b3c] p-2 rounded-tl-md rounded-tr-md rounded-bl-md'>hello</p>
                </div>
            </div>
        </div>
    );
};

export default HideComments;