export const addItem = (item, boxId) => {

return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/boxes/${boxId}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(box => {
        if (box.error) {
            alert(box.error)
        } else {
            dispatch({type: 'ADD_ITEM', payload: box})
        }       
      }
    )
  }
}

/*
1. We’re fetching the box with the ID of the box we’re adding the item to.
2. We’re creating a new item with the item we’re adding.
3. We’re sending the new item to the server.
4. We’re dispatching an action to the store with the new item.
*/
