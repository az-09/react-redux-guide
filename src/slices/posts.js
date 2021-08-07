import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    loading: false,
    error: false,
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        getPosts: (state) => {
            state.loading = true
        },
        getPostsSuccess: (state, {playload}) => {
            state.posts = playload
            state.loading = false
            state.error = false
        },
        getPostsError: (state) => {
            state.loading = false
            state.error = true
        }
    }
})

export const {getPosts, getPostsSuccess, getPostsError} = postsSlice.reducer

export const postsSelector = (state) => state.posts

// export default postsSlice.reducer

export function fetchPosts() {
    return async (dispatch) =>{
        dispatch(getPosts())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            dispatch(getPostsSuccess(data))
        } catch (error){
            dispatch(getPostsError())
        }
    }
}
