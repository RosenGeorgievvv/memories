import * as api from '../api';

//Action Creators = Functions that return actions

export default function getPosts() {
    return async(dispatch) => {
        try {
            const { data } = await api.fetchPosts();
            dispatch({ type: 'FETCH_ALL', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}