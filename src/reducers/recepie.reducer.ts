

import { ActionReducer, Action } from '@ngrx/store';
import * as RecepieActions from '../actions/recepie.actions';
import { AppState } from '../services/state';  

export type Action = RecepieActions.All;

let model:AppState;

model = {
    recepies:[],
    selectedRecepie: undefined
}

export function RecepieReducer(state = model, action) {
 
    let stateObj = Object.assign({}, state);
    // console.log(stateObj)
    switch (action.type) {
        case RecepieActions.ADD_RECEPIE:
            stateObj.recepies = [...state.recepies, ...action.payload]
            break
        
        case RecepieActions.INITIAL:
            stateObj.recepies = [...stateObj.recepies, ...action.payload]
            break;

        case RecepieActions.SET_SELECTED:
            // console.log( action.payload)
            break;
    }

    // console.log(stateObj)
     return stateObj;
}