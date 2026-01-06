import React from 'react';

const MyComponent = (props) => {
     const { name = '전윤수(디폴트)' } = props; //비구조화 할당 문법
    return (
        <div> 
            {name}의 새롭고 멋진 2026년도를 위해... 
            children 값은 {props.children}
        </div>
    ) 
};

export default MyComponent;
