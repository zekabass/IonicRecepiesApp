
import { Action } from "@ngrx/store";
import { Recepie } from '../models/recepieModel';

export const ADD_RECEPIE = "ADD_RECEPIE";
export const INITIAL = "INITIAL";
export const SET_SELECTED = "SET_SELECTED";

export class InitialData implements Action {
    readonly type = INITIAL;
    constructor(public payload: Recepie[]) {}
}

export class AddRecepie implements Action {
  readonly type = ADD_RECEPIE;
  constructor(public payload: Recepie) {}
}

export class setSelected implements Action {
    readonly type = SET_SELECTED;
    constructor(public payload: Recepie) {}
  }

export type All = AddRecepie | InitialData | setSelected;
