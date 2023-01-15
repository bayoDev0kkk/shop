import React from 'react';
import { useSelector } from 'react-redux';

const Example = () => {
    const age = useSelector((state) => {
        return state.age;
    });

    return (
        <div>
            <h1>{age}</h1>
        </div>
    );
};

export default Example;