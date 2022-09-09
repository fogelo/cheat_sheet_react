import React, {useEffect, useRef} from 'react';
import "./LearnJsAnimation.scss"

const LearnJsAnimation = () => {

    const btnRef = useRef(null)

    const changeColorVariant1 = (e) => {
        btnRef.current.style.backgroundColor = 'red'
    }

    const changeColorVariant2 = (e) => {
        btnRef.current.classList.add('transited')
    }

    useEffect(() => {

        //событие transitionend - событие происходит когда анимация завершатся, можем повешать обработчик
        btnRef.current.addEventListener('transitionend', function() {
            console.log('end')
        });

    }, [])

    return (
        <div>
            <div ref={btnRef} className={'transition-div'}/>
            <button className={'btn'} onClick={changeColorVariant1}>
                button
            </button>
            <button className={'btn'} onClick={changeColorVariant2}>
                button
            </button>
        </div>
    );
};

export default LearnJsAnimation;