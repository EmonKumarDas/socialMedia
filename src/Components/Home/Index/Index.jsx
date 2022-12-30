import React from 'react';
import Post from '../Post/Post';
import UploadMedia from '../UploadMedia/UploadMedia';
import { useQuery } from '@tanstack/react-query'
import Loader from '../../Loader/Loader';
const Index = () => {
    const {refetch, isLoading, data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch('http://localhost:5000/post').then(res =>
                res.json()
            )
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <>
            <UploadMedia></UploadMedia>
            {
                posts.map(post=><Post key={post._id} refetch={refetch} postdata={post}></Post>)
            }
            
        </>
    );
};

export default Index;