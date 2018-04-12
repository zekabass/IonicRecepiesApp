
import { Action } from "@ngrx/store";
import { Recepie } from '../models/recepieModel';

export const SET_SELECTED = "SET_SELECTED";

export class SetSelected implements Action {
  readonly type = SET_SELECTED;
  constructor(public payload: Recepie) {}
}


export type All = SetSelected ;
