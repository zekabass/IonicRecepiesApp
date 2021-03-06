

import { Action } from '@ngrx/store';
import * as RecepieActions from '../actions/recepie.actions'; 

export type Action = RecepieActions.All;

export function RecepieReducer(state = [], action) {
    switch (action.type) {
        /* Add new recipe to the state */
        case RecepieActions.ADD_RECEPIE:
            return [...state, ...action.payload];

        /* Removing recipe from the state */
        case RecepieActions.REMOVE_RECEPIE:
            return state.filter(recepie => recepie.id !== action.payload);

        default:
            return state
    }
}