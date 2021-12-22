export const addBox = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/boxes', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(box => dispatch({type: 'ADD_BOX', payload: box}))
    }

}

/*
1. It’s fetching the URL http://localhost:3001/api/v1/boxes.
2. It’s sending a POST request to that URL.
3. It’s sending the data that we want to add to the server.
4. It’s expecting a response back from the server.
5. It’s expecting a response back from the server in JSON format.
6. It’s parsing the JSON response from the server.
7. It’s dispatching an action to the Redux store.
*/
