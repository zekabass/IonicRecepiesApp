
import { Action } from "@ngrx/store";
import { Recepie } from '../models/recepieModel';

export const ADD_RECEPIE = "ADD_RECEPIE";
export const REMOVE_RECEPIE = "INITIAL";


export class RemoveRecepie implements Action {
    readonly type = REMOVE_RECEPIE;
    constructor(public payload: number) {}
}

export class AddRecepie implements Action {
    readonly type = ADD_RECEPIE;
    constructor(public payload: Recepie) {}
}


export type All = AddRecepie;
