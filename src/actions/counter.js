export const increment = (data) => {
    return {
        type: 'INCREMENT',
        payload: data
    }
}

export const decrement = (data) => {
    return {
        type: 'DECREMENT',
        payload: data
    }
}

export const incrementCounterAction = (data) => {
    return (dispatch, getState) => {
        dispatch(increment(data));
        const { counter } = getState();
        console.log('counter ', counter);
    }
}

export const decrementCounterAction = (data) => {
    return (dispatch, getState) => {
        // TODO: check current state of counter before applying decrement
        dispatch(decrement(data));
        const { counter } = getState();
        console.log('counter ', counter);
    }
}