export const deleteItem = (itemId, boxId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/boxes/${boxId}/items/${itemId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(box => dispatch({type: 'DELETE_ITEM', payload: box}))
    }

}

/*
1. First, we’re fetching the box with the given boxId.
2. Then, we’re fetching the item with the given itemId.
3. Then, we’re deleting the item with the given itemId.
4. Finally, we’re dispatching an action to the store.
*/
