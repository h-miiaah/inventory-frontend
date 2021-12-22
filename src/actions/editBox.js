export const editBox = (data) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/boxes/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(box => dispatch({type: 'EDIT_BOX', payload: box}))
    }

}

/*
1. We’re fetching the box we want to edit from the API.
2. We’re updating the box with the new data.
3. We’re dispatching the updated box to the store.
*/
