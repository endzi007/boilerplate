export const types = {
    LOGIN: "personalInfo/LOGIN",
    CHANGE_INFO: "personalINfo/CHANGE_INFO",
    CHANGE_LANGUAGE: "personalInfo/CHANGE_LANGUAGE",
    CHANGE_EDIT_MODE: "personalInfo/CHANGE_EDIT_MODE"
}

export const creators = {
    login: (bool)=>({type: types.LOGIN, payload: bool}),
    changeInfo: (info)=>({type: types.CHANGE_INFO, paylod: info}),
    changeLanguage: (lang)=>({type: types.CHANGE_LANGUAGE, payload: lang}),
    changeEditMode: (bool) => ({type: types.CHANGE_EDIT_MODE, payload: true})
}

export let defaultState = {
    personalInfo: {
        fullName: "Enis Jasarovic",
        email: "jasarovic.enis@gmail.com",
        password: "123456",
        profileImage: "https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
    },
    logedIn: true,
    recentLikes: {

    },
    language: "en",
    editMode: false
} 
export default (state = defaultState, action)=>{
    let newState = {...state};
    switch (action.type) {
        case types.CHANGE_INFO:
            newState.personalInfo = action.payload;
            return newState;
        case types.LOGIN:
            newState.logedIn = action.payload;
            return newState;
        case types.CHANGE_LANGUAGE:
            newState.language = action.payload;
            return newState;
        case types.CHANGE_EDIT_MODE:
            newState.editMode = action.payload;
            return newState;
        default:
            return newState;
    }
}