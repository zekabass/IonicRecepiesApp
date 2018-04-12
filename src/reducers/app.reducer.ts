

import { Action } from '@ngrx/store';
import * as AppActions from '../actions/app.actions';

export type Action = AppActions.All;

let InitialState:object = {
    selectedRecepie:undefined
}

export function AppReducer(state = InitialState, action) {

    switch (action.type) {
        case AppActions.SET_SELECTED:
            console.log(action.payload)
            return { ...state, selectedRecepie:action.payload }

        default:
            return state
    }

}