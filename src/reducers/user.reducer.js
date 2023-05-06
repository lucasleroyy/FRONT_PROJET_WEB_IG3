import { GET_USER } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            // toute la data qui a été envoyé , on incremente , on met toute la data à l'interieur
            return action.payload

        default:
            return state;
    }
}
