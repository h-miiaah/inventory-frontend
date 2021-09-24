export const deleteItem = (itemId, boxId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/boxes/${boxId}/items/${itemId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(box => dispatch({type: 'DELETE_ITEM', payload: box}))
    }

}