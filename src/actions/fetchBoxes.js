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

/*
1. We’re fetching the boxes from the server.
2. We’re getting a reponse from the server and we convert it to .json format.
3. We’re dispatching an action to the store.
*/
