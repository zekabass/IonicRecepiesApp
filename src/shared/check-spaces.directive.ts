import { FormControl } from '@angular/forms'
export function checkSpacesValidator(control: FormControl) { 
    if(control.value && typeof(control.value) == 'string'){
        let string = control.value; 
        if(string.trim() == '') {
            return {
                emptyString :{
                    msg: 'Input contains only spaces'
                }
            }
        }
    }
   
    return null; 
  }
