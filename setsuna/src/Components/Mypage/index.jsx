import React from 'react';
import './index.css';

class Mypage extends React.Component {
    render(){
        const chalengeListArr = ["one","two","three"]
        const name = "鈴木萌斗"
        return(
            <div className='Mypage'>
                <img src="../../Images/Moeto.jpg" alt="face photo"/>
                <h1>{name}</h1>
                <div className="chalengeList">
                    <li>
                        {chalengeListArr.map(x=> {
                            return <ul>{x}</ul>;
                        })}
                    </li>
                </div>
            </div>
        )
    }
}
export default Mypage;