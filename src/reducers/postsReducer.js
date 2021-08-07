import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../actions/postsActions"

export const initialState = {
    posts: [],
    loading: false,
    error: false
}

export default function tesReducer(state=initialState, action){

    switch(action.type){

        case GET_POSTS:
            return {...state, loading: true}
        
        case GET_POSTS_SUCCESS:
            return {posts: action.payload, loading: false, error: false}
        
        case GET_POSTS_ERROR:
            return {...state, loading:false, error:true}

        default:
            return state
    }
}