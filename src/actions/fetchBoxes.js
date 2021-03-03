// import { bindActionCreators } from "redux"

export function fetchBoxes () {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/boxes')
        .then(response => response.json())
        .then(boxes => dispatch({
            type: 'FETCH_BOXES', 
            payload: boxes
        }))
    }
}