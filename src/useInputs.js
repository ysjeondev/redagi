import {useReducer } from 'react';

function reducer(State, action){
    return {
        ...State,
        [action.name]: action.value
    };
}

export default function useInputs(initialForm){
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];
}
