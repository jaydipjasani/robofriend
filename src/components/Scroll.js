import React from 'react';

export default function Scroll(props) {
    return (
        <div style={{border : '2px solid black',overflow :'scroll', height: '100vh'}}>
           {props.children}
        </div>
    )
}

