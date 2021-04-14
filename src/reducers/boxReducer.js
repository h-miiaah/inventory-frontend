export default function boxReducer(state ={boxes: []}, action) {
    switch (action.type){
        case 'FETCH_BOXES':
            return {boxes: action.payload}
        case 'ADD_BOX':
            return {...state, boxes: [...state.boxes, action.payload]}
        default:
            return state
    }
}