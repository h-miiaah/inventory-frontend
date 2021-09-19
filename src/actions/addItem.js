export const addItem = (item, boxId) => {

return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/boxes/${boxId}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(box => dispatch({type: 'ADD_ITEM', payload: box}))
}


}