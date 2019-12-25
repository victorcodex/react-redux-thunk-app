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