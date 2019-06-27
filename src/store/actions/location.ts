import { createAction } from 'redux-actions'
import {MLocation, SetLocation} from "../types";
export const getLocation=function (m:MLocation) {
    return {
        type:SetLocation,
        payload:m
    }
}
