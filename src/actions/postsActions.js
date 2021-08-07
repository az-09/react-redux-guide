export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

export const getPosts = () => ({
    type: GET_POSTS,
})

export const getPostsSuccess = (data) => (
{
    type: GET_POSTS_SUCCESS,
    payload: data,
})

export const getPostsError = () =>({
    type: GET_POSTS_ERROR
})

export function fetchPosts() {
    return async(dispatch) => {
        dispatch(getPosts())
    
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            dispatch(getPostsSuccess(data))
        } catch (err){
            dispatch(getPostsError())
        }
    
    
    }


}