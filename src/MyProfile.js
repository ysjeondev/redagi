import React from 'react';
const MyProfile=({name, year}) => {
    return(
        <div>
            <h3>자식 컴포넌트(MyProfile) </h3>
            <p>이름 : {name}</p>
            <p> 목표연도: {year}</p>
        </div>
    )
}

export default MyProfile;