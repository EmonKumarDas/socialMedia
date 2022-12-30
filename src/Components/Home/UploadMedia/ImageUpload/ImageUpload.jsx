import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFileImage } from 'react-icons/fa';
import Modal from './Modal/Modal';
const ImageUpload = () => {

    return (
        <div className='flex justify-evenly py-5 p-2'>
            <label htmlFor="photo" className='flex cursor-pointer gap-1'>
                <p className="text-red-700 hover:text-orange-700 focus:outline-none focus:shadow-outline lg:text-3xl">
                    <FaCamera />
                </p>
                <p className='font-bold text-gray-500'>Camera</p>
            </label>

            <label htmlFor="photo" className='flex cursor-pointer gap-1'>
                <p className="text-green-800 hover:text-orange-700 focus:outline-none focus:shadow-outline lg:text-3xl">
                    <FaFileImage />
                </p>
                <p className='font-bold text-gray-500'>Photo/Media</p>
            </label>

            <label htmlFor="photo" className='flex cursor-pointer gap-1'>
                <p className="text-orange-400 hover:text-orange-700 focus:outline-none focus:shadow-outline lg:text-3xl">
                    <FaMapMarkerAlt />
                </p>
                <p className='font-bold text-gray-500'>Feeling/acitivity</p>
            </label>
            <Modal></Modal>
        </div>
    );
};

export default ImageUpload;