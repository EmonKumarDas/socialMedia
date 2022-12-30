import React from 'react';
import PostCard from './PostCard';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { userContext } from '../../../Context/AuthContext';
import Loader from '../../../Loader/Loader';
const Posts = () => {
    const { user } = useContext(userContext);
    const { isLoading, data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch(`http://localhost:5000/getpost?email=${user.email}`).then(res =>
                res.json()
            )
    })

    return (
        <div>
            {
                posts.map(post => isLoading ? <Loader></Loader> : <PostCard key={post._id} getpost={post} ></PostCard>)
            }


        </div>

    );
};

export default Posts;