import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../actions/postsActions'
import { Post } from '../components/Post'
import { postsSelector } from '../slices/posts'

// Reduc
// const PostsPage = ({dispatch, loading, posts, error}) => {

const PostsPage = () =>{
    const dispatch = useDispatch()
    const {posts, loading, error} = useSelector(postsSelector)

    useEffect(() =>{
        dispatch(fetchPosts())
    }, [dispatch])
    
    const renderPosts = () => {
        if(loading) return <p> Loading</p>
        if(error) return <p> Unable to display posts</p>
        return posts.map(post => <Post key={post.id} post={post}/>) 
    }
    
    return (
        <div>
            {renderPosts()}
        </div>
    )
}

export default PostsPage

// Redux
// const mapStateToProps = (state) => ({
//     loading: state.posts.loading,
//     posts: state.posts.posts,
//     error: state.posts.error
// })

// export default connect(mapStateToProps)(PostsPage)
