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