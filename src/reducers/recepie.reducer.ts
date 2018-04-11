

import { ActionReducer, Action } from '@ngrx/store';
import * as RecepieActions from '../actions/recepie.actions';
import { AppState } from '../services/state';  

export type Action = RecepieActions.All;

let initialState:AppState = {
    recepies:[],
    selectedRecepie: undefined
}

export function RecepieReducer(state:any = initialState, action) {

    switch (action.type) {
        case RecepieActions.ADD_RECEPIE:
            return {...state, recepies: [...state.recepies, ...action.payload]};
        
        case RecepieActions.INITIAL:
            return {...state, recepies: [...state.recepies, ...action.payload]};

        case RecepieActions.SET_SELECTED:
            return state
        default:
            return state
    }

}