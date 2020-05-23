import { createStore } from "redux";

let defaultState = {
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