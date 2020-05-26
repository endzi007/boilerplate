export const types = {
    LOGIN: "personalInfo/LOGIN",
    CHANGE_INFO: "personalINfo/CHANGE_INFO",
    CHANGE_LANGUAGE: "personalInfo/CHANGE_LANGUAGE"
}

export const creators = {
    login: (bool)=>({type: types.LOGIN, payload: bool}),
    changeInfo: (info)=>({type: types.CHANGE_INFO, paylod: info}),
    changeLanguage: (lang)=>({type: types.CHANGE_LANGUAGE, payload: lang})
}

export let defaultState = {
    personalInfo: {
        fullName: "Enis Jasarovic",
        email: "jasarovic.enis@gmail.com",
        password: "123456",
        profileImage: ""
    },
    logedIn: true,
    recentLikes: {

    },
    language: "en",
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
        default:
            return newState;
    }
}