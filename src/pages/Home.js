import React from 'react'
import { Button } from '../components/Button'
import './Home.css';
import '../App.css';

function Home() {
    return (
        <div className="home-container">
            <h1>We are RED DEVILS!</h1>
            <p>Welcome to our offical website!</p>
            <p>Click the button below and become part of our TEAM!</p>
            <div className="home-btns">
                <Button
                    className='btns'
                    buttonStyle="btn--outline"
                    buttonSize='btn--large'>
                    BECOME PART OF OUR COMMUNITY!
                </Button>
            </div>
        </div>
    )
}

export default Home

