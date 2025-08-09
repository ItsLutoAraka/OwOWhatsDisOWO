import { useEffect, useState } from 'react';
import './DAWHEELOFD00M.css'
const SECOND = 1000;
const audio = new Audio('public/airhorn.mp3');

function DAWHEELOFD00M() {
    const [isSpinning, setIsSpinning] = useState(false);
    const [cookieCount, setCookieCount] = useState(0);
    const [hornInterval, setHornInterval] = useState(5.5 * SECOND);
    const [volume, setVolume] = useState(0.001);
    const [startCountdown, setStartCountdown] = useState(false);
    const [countdown, setCountdown] = useState(600 * SECOND);

    audio.volume = volume;

    setInterval(() => {
        audio.play();
    }, hornInterval);

    const rng = () => {
        const num = Math.floor(Math.random() * 7);
        return num;

    }

    const handleOnclick = () => {
        setIsSpinning(true);
        setTimeout(() => {
            setIsSpinning(false);
        }, 5 * SECOND);
    }

    const handleButtonClick = () => {
        if(hornInterval > 10 && countdown === 0) {
            setVolume(volume + 0.0001);
            setHornInterval(hornInterval - 10);
        } 
        if(rng() === 0 ){
            setCookieCount(cookieCount + 1);
        }
    }

    useEffect(() => {
        if(!startCountdown && cookieCount > 0){
            setStartCountdown(true);
        }
    }, [startCountdown, cookieCount]);

    useEffect(() => {
    let id: number;
    if(startCountdown && countdown > 0){
        id = setInterval(() => {
            setCountdown(prev => {
                if(prev <= SECOND) {
                    clearInterval(id);
                    return 0;
                }
                return prev - SECOND;
            });
        }, SECOND);
    }
    
    return () => clearInterval(id);
}, [startCountdown]); 

    return (
        <>
           {cookieCount > 0 
           ? <div className='counter'> You have {cookieCount} cookies</div> 
           : null}
            <div className={isSpinning ? 'wheel spin-da-wheel' : 'wheel'} onClick={handleOnclick}>
                <div>{countdown} {volume} {hornInterval} </div>
                <div className='partition line-1'></div>
                <div className='uSuck'> DON B BAD PORSON </div>
                <div className='partition line-2'></div>
                <div className='uWin rot'> YOU WIN </div>
            </div>
            <button className='flash-and-zoom' onClick={handleButtonClick}> SPEEN THE WHEEL </button>
        </>
    )
}
export default DAWHEELOFD00M;