import {Actions} from "./list.actions";

const initialState = {
    items: []
}

export function ListReducer(state =initialState, action) {

    switch (action.type) {
        case Actions.ADD_ITEM_IN_LIST :
            const items = state.items.slice();
            items.push(action.payload);
            return {
                ...state,
                items: items
            };
        default:
            return state
    }
}