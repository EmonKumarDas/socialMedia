import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import ConnectedUser from '../../../../Hook/ConnectedUser';
import EditModal from './EditModal';

const UserInfo = () => {
    const [dbuser] = ConnectedUser();
    // const { name, ProfilePhoto, location, studied } = dbuser;
    const [editData, setEditData] = useState("");
    const updateData = (data) => {
        setEditData(data);
    }
    return (
        <div className='p-5 my-10 rounded-md bg-[#242526]'>
            <h1 className='font-bold text-white font-mono pb-4 text-xl'>Intro</h1>
            <p className='flex gap-2 py-4'>
                <FaHospitalUser className='text-2xl text-gray-400'></FaHospitalUser> {dbuser?.name}
            </p>
            <p className='flex gap-2 py-4'>
                <FaBookOpen className='text-2xl text-gray-400'></FaBookOpen> Studied at {dbuser?.studied}
            </p>
            <p className='flex gap-2 py-4'>
                <FaInbox className='text-2xl text-gray-400'></FaInbox> {dbuser?.email}
            </p>
            <p className='flex gap-2 py-4'>
                <FaMapMarkerAlt className='text-2xl text-gray-400'></FaMapMarkerAlt> {dbuser?.location}
            </p>
            <label onClick={() => updateData(dbuser)} htmlFor='update' className="btn w-full">Edit details</label>
            <EditModal updateData={editData}></EditModal>
        </div>
    );
};

export default UserInfo;