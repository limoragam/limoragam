import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validatorTextarea][ngModel]',
  providers: [{ provide:NG_VALIDATORS, useExisting:ValidatorTextareaDirective, multi:true}]
})
export class ValidatorTextareaDirective implements Validator {
    validator:ValidatorFn;

    constructor() {
        this.validator = this.validateTextareaFactory();
    }

    validate(textarea:FormControl) {
        return this.validator(textarea);
    }

    validateTextareaFactory():ValidatorFn {
        return (textarea:AbstractControl) => {
            if(textarea.value==='') {
                return {textareaValidationObject:{valid:false}};
            } else {
                return null;
            }
        }
    }
}