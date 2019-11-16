import React from 'react'

let dp = props => (
    <div className={props.imgDivSmall}>
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src={require('../../images/best.jpeg')} alt='Augustine Igwe' />
    </div>
)

export default dp;