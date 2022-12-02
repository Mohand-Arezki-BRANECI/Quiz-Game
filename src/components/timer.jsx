import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)

    if(minutes <= 9) minutes = '0' + minutes;
    if(seconds <= 9) seconds =  '0' + seconds;

    return minutes + ':' + seconds

}

export default function Timer({seconds}){
    const [countDown, setCountDown] = useState(seconds);
    const timerId = useRef()
        useEffect(() => {
            timerId.current = setInterval(() =>{
                setCountDown(prev => prev -1)
            },1000)
                return () => clearInterval(timerId.current)
            }, [])
            useEffect(() => {
                if(countDown <= 0){
                    clearInterval(timerId.current)
                    alert("Temps écoulé :/")
                    window.location.reload(false)
                    
                }
            }, [countDown]
            )

    return(
        <h2>Timer : {formatTime(countDown)}</h2>
    )
}