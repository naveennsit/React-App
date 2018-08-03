export const Actions = {
    ADD_ITEM_IN_LIST: 'add_item_in_list',
};


export function addItemInList(item) {
    return {
        type: Actions.ADD_ITEM_IN_LIST,
        payload: item
    }
}