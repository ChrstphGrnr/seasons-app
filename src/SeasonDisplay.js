import './SeasonDisplay.css'
import React from 'react'

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter'; 
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: "Let\s hit the beach!", 
        icon: 'massive sun icon'
    }, 
    winter: {
        text: 'Burr, it\s chilly!', 
        icon: 'massive snowflake icon'
    }
}



const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${seasonConfig[season].icon}`} />
                <h1>{seasonConfig[season].text}</h1>
            <i className={`icon-right ${seasonConfig[season].icon}`} />
        </div>
    )
}

export default SeasonDisplay;

// ReactDOM.render(<SeasonDisplay />, document.querySelector('#root'))