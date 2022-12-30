import React from 'react';
import ConnectedUser from '../../../Hook/ConnectedUser';
import FriendImages from './FriendsListImage/FriendImages';

const ProfileImageSection = () => {
    const [dbuser] = ConnectedUser();


    return (
        <div>
            <div className='relative w-full h-96'>
                <div className='w-full rounded-lg'>
                    <img src={dbuser?.cover ? dbuser?.cover : "https://source.unsplash.com/301x301/?random"} className='w-full rounded-md h-96 object-cover' alt="" srcset="" />
                </div>
                <div className='absolute lg:-bottom-14 -bottom-16 left-52 lg:left-64'>
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="lg:w-36 w-32">
                                <img src={dbuser?.ProfilePhoto} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-2xl font-serif uppercase py-2'>{dbuser?.name}</h1>
                <p className='font-bold text-md text-gray-400'>1k friends</p>
                <FriendImages></FriendImages>
            </div>
        </div>
    );
};

export default ProfileImageSection;