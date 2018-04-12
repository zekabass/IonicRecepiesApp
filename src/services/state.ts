import { Recepie } from '../models/recepieModel';

export interface AppState {  
    recepies: Recepie[],
    mainState: any
}