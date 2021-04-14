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