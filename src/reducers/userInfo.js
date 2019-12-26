const initialValue = {
    isLoggedIn: false,
    firstName: null,
    lastName: null,
    email: null
};

const userInfo = (state = initialValue, action) => {
    switch (action.type) {
        case 'GET_USER_INFO':
            return state;
        case 'UPDATE_USER_INFO':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default userInfo;