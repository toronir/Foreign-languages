const SELECT_PL = "language/SELECT_PL"
const SELECT_RU = "language/SELECT_RU"
const SELECT_EN = "language/SELECT_EN"

let initialState = {
    language: "pl"
}

let languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PL:
            return {
                ...state, language:"pl"
            };
        case SELECT_RU:
            return {
                ...state, language:"ru"
            };
        case SELECT_EN:
            return {
                ...state, language:"en"
            };
        default:
            return state;
    }
};
export const changeLanguagePlAction = (language) => ({type: SELECT_PL,language})
export const changeLanguageRuAction = (language) => ({type: SELECT_RU,language})
export const changeLanguageEnAction = (language) => ({type: SELECT_EN,language})


export default languageReducer;