import { RecepieReducer } from '../reducers/recepie.reducer';
import { AppReducer } from '../reducers/app.reducer';

/* Wrapp all reducers */
export const ROOT_REDUCER = {
    recepies: RecepieReducer,
    mainState: AppReducer
};