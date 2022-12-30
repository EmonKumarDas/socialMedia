import React from 'react';
import UserInfo from '../LeftSideInfo/UserInfo';
import Posts from '../RightSideInfo/Posts';

const Index = () => {
    return (
        <div className='grid grid-cols-2 gap-2'>
           <div className=''> <UserInfo></UserInfo></div>
            <Posts></Posts>
        </div>
    );
};

export default Index;