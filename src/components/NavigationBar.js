import React from 'react'
import {Link} from 'react-router-dom'

const NavigationBar = (props) => {

    return (
        <div>
            <Link to='/boxes' style={{paddingRight: '12px'}}> Home </Link>
            <Link to='/boxes' style={{paddingRight: '12px'}}> Boxes </Link>
            <Link to='/boxes/new'style={{paddingRight: '12px'}}> Add Box </Link>
        </div>
    )

}

export default NavigationBar