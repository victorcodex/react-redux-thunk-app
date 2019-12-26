export const get_user_info = (data) => {
    return {
        type: 'GET_USER_INFO'
    }
}

export const update_user_info = (data) => {
    return {
        type: 'UPDATE_USER_INFO',
        payload: data
    }
}

export const getUserInfo = () => {
    return (dispatch, getState) => {
        const { user } = getState();
        console.log('user ', user);
        dispatch(get_user_info());
    }
}

export const updateUserInfo = (data) => {
    return (dispatch, getState) => {
        dispatch(update_user_info(data));
        const { user } = getState();
        console.log('user ', user);
    }
}