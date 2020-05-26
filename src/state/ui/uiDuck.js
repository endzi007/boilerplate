export const types = {
    SHOW_DRAWER: "ui/SHOW_DRAWER"
}

export const creators = {
    showDrawer: (bool)=>({type: types.SHOW_DRAWER, payload: bool}),
}

export let defaultState = {
    showDrawer: false
} 
export default (state = defaultState, action)=>{
    let newState = {...state};
    switch (action.type) {
        case types.CHANGE_INFO:
            newState.showDrawer = action.payload;
            return newState;
        default:
            return newState;
    }
}