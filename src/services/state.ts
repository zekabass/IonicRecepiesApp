import { Recepie } from '../models/recepieModel';

export interface AppState {  
    recepies: Recepie[],
    selectedRecepie: Recepie
}