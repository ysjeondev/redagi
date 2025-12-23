import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ( props) => {
    const {name='니혼짱데스', children, role='FA개발자', age=20} = props;
    return (
        <div> 
            나의 새롭고 먼진 2026년을 위해 공부 <br />
            안녕~ 나의 이름은 {name} 이다. 우리 열심히 공부해 보자 <br/>
            children 값은 {children}, <br />
            역활은 {role} <br />
            나이은 {age}
        </div>
    );
};


MyComponent.prototype = {
    name : PropTypes.string
}
export default MyComponent;
