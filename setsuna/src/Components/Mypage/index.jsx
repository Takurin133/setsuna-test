import React from 'react';
import './index.css';

class Mypage extends React.Component {
    render(){
        var name = '鈴木萌斗';
        return(
            <div className='Mypage'>
                <img src="../../Images/Moeto.jpg" alt="face photo" height='100%' width='100%'/>
                <h1>{name}</h1>
            </div>
        )
    }
}
export default Mypage;