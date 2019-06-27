export const SetLocation='SETLOCATION';
export interface MLocation {
    lat:string,
    lng:string
}
export interface LocationActionType{
    type:string,
    payload:MLocation

}
