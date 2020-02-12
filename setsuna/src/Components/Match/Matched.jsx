import React from 'react';
import {Timer} from './Timer'
import {TimerButton} from './TimerButton'
import './index.css'

class Matched extends React.Component {
    render(){
        const user1 = {
            name: "鈴木萌斗"
        }
        const user2 = {
            name: "道下実紀"
        }
        const user3 = {
            name: "坂本恭平"
        }
        const user4 = {
            name: "大隈拓海"
        }
        return (
            <div>
                <div className="parent">
                    <div className="user1">
                        <img src="#" alt="user1.image"/>
                        {/* <p>{user1}</p> */}
                        <p>{user1.name}</p>
                    </div>
                    <div className="user2">
                        <img src="#" alt="user2.image"/>
                        {/* <p>{user2}</p> */}
                        <p>{user2.name}</p>
                    </div>
                    <div className="user3">
                        <img src="#" alt="user3.image"/>
                        {/* <p>{user3}</p> */}
                        <p>{user3.name}</p>
                    </div>
                    <div className="user4">
                        <img src="#" alt="user4.image"/>
                        {/* <p>{user4}</p> */}
                        <p>{user4.name}</p>
                    </div>
                </div>

                <div className='Timer' style={{marginTop: '100px'}} >
                    <Timer minutes={'00'} seconds={'00'} ref='timer' />
                    <div className='timer-button-container'>
                        <TimerButton text={'START'} handleClick={() => this.refs.timer.start()} />
                        <TimerButton text={'STOP'} handleClick={() => this.refs.timer.stop()} />
                        {/* <TimerButton text={'RESET'} handleClick={() => this.refs.timer.reset()} /> */}
                    </div>
                </div>

            </div>
        )
    }
}
export default Matched;