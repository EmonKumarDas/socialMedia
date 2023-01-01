import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Post from '../Home/Post/Post';
import Loader from '../Loader/Loader';

const Media = () => {
    const { refetch, isLoading, data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch('https://golden-glimmers-server-emonkumardas.vercel.app/Mediapost').then(res =>
                res.json()
            )
    })
    
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            {
                posts.map(post => <Post key={post._id} refetch={refetch} postdata={post}></Post>)
            }
        </div>
    );
};

export default Media;