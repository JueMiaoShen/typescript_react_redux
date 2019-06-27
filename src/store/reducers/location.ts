import { handleActions } from 'redux-actions'
import {LocationActionType, SetLocation} from "../types";

export default handleActions({[SetLocation](state,action:LocationActionType){
    return {
        ...state,
        lat: action.payload.lat,
        lng:action.payload.lng

    }
    }},{lat:'888', lng:'123123123'})

