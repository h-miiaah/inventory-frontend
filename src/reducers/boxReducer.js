import { assertConditional } from "@babel/types";

export default function boxReducer(state ={boxes: []}, action) {
    switch (action.type){
        case 'FETCH_BOXES':
            return {boxes: action.payload}
        case 'ADD_BOX':
            return {...state, boxes: [...state.boxes, action.payload]}
        case 'ADD_ITEM':
            let boxes = state.boxes.map(box => {
                if (box.id === action.payload.id) {
                    return action.payload
                } else {
                    return box
                }
            })
            return {...state, boxes: boxes}
        case 'DELETE_ITEM':
            let boxesTwo = state.boxes.map(box => {
                if (box.id === action.payload.id) {
                    return action.payload
                } else {
                    return box
                }
            })
            return {...state, boxes: boxesTwo}
        case 'EDIT_BOX':
            let boxesThree = state.boxes.map(box => {
                if (box.id === action.payload.id) {
                    return action.payload
                } else {
                    return box
                }
            })
            return {...state, boxes: boxesThree}
        default:
            return state
    }
}