import React from 'react'
import {Link} from 'react-router-dom'

const NavigationBar = (props) => {

    return (
        <div class="navbar">
            <Link to='/boxes' style={{paddingRight: '12px'}}> Home </Link>
            <Link to='/boxes' style={{paddingRight: '12px'}}> Boxes </Link>
            <Link to='/boxes/new'style={{paddingRight: '12px'}}> Add Box </Link>
        </div>
    )

}

export default NavigationBar

/*
1. Importing the React library
2. Importing the Link component from the react-router-dom library
3. Creating a div element with the class of navbar
4. Creating a Link element with the text Home and the href of /boxes
5. Creating a Link element with the text Boxes and the href of /boxes
6. Creating a Link element with the text Add Box and the href of /boxes/new
7. Returning the div element
*/
