import React from 'react';
import ImageUpload from './ImageUpload/ImageUpload';
import Search from './ProfileWithSearch/Search';

const UploadMedia = () => {
    return (
        <div className='bg-[#242526] shadow-md rounded-md my-8'>
            <Search></Search>
            <div className='border-b-[1px] lg:w-[47vw] md:w-[56vw] m-auto'></div>
            <ImageUpload></ImageUpload>
        </div>
    );
};

export default UploadMedia;