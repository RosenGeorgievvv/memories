import * as api from '../api';

function createPost(post) {
    return async(dispatch) => {
        try {
            const { data } = await api.createPost(post);

            dispatch({ type: 'CREATE', payload: data });
        } catch (error) {
            console.log(error);
        }
    };
}
export default createPost;