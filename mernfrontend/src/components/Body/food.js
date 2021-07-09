import React, {useEffect} from 'react';
import urlim from './food_items1.jpg';
const Food=()=>{
    useEffect(()=>{
        document.getElementById('food').style.background = `url(${urlim}) no-repeat center center/cover`;
    },[]);
    return(
        <div id='food'>
            <a href='https://www.youtube.com/watch?v=g2yydWCKu4k' target='_blank'>Hair</a>
            <a href='https://www.youtube.com/watch?v=KRo0XRkIfys' target='_blank'>Face</a>
            <a href='https://www.youtube.com/watch?v=DQniWOTizpA' target='_blank'>Digestion</a>
            <a href='https://www.youtube.com/watch?v=x2v9YC40LvY' target='_blank'>Heart</a>
        </div>
    )
}

export default Food;