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