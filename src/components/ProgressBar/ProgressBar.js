import React from 'react';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import './ProgressBar.css';

const ProgressBar = ({value, maxValue}) => {
    const formatMoney = (val) => {
        
    }
    let progress = (value / maxValue) * 100
    let currentMoney = progress > 50 ? '#fff' : '#4BB34B'
    let up = document.getElementsByClassName('Progress__active').width
    console.log(up)
    console.log(document.getElementsByClassName('maxMoney').width)
    console.log(progress)
    return(
    <div className='Progress__bar'>
        <div className='Progress__active' style={{width: progress + '%'}}></div>
        <Text weight="medium" className={progress > 50 ? "inside" : "currentMoney"} 
                style={{color: "#818C99", 
                padding: "3px 8px", 
                zIndex: '2', color: 
                currentMoney}}>5 000 ₽</Text>
        <Text weight="medium" className='maxMoney up' style={{color: "#818C99", padding: "3px 8px", zIndex: '2', position: 'absolute', right: '0'}}>10 000 ₽</Text>
    </div>
    )
}

export default ProgressBar