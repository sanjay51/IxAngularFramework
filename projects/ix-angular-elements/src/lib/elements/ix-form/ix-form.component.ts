import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LOADING_GIF_SRC } from '../../constants';

@Component({
  selector: 'ix-form',
  templateUrl: './ix-form.component.html',
  styleUrls: ['./ix-form.component.scss']
})
export class IxFormComponent implements OnInit {
  formGroup: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  returnUrl: string;
  LOADING_GIF_SRC: string = LOADING_GIF_SRC;
  
  @Input() form: any;

  /*
  form = {
    fields: [
      {
        name: "sanjay",
        label: "Label here",
        validators: [Validators.required]
      }
    ],

    onSubmit: (fields) => {console.log(fields.sanjay.value)}
  }*/

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    let group = {}

    /*
    {
        field1: ['', Validators.required],
        field2: ['', Validators.required],
    }
    */
    this.form.fields.forEach(field => {
      if (!field.isDisabled) 
      group[field.name] = ['', field.validators]
    });
    this.formGroup = this.formBuilder.group(group);

    if (this.form.isDirty) {
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.controls[key].markAsDirty()
      })
    }

    /* Set default values */
    let values = {}
    this.form.fields.forEach(field => {
      if (!field.isDisabled) values[field.name] = field.defaultValue;
    });
    this.formGroup.setValue(values);
  }

  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

  onSubmit() {
      this.submitted = true;
      this.error = null;

      // stop here if form is invalid
      if (this.formGroup.invalid) {
          return;
      }

      this.loading = true;
      this.form.onSubmit(this.f)
                .then(response => {

                  if (response.errorType) {
                    throw new Error(response.cause.errorMessage)
                  }

                  return response;
                }).then(response => {
                  this.form.postSubmit(response.response)
                })
                .catch(err => {
                  if (this.form.parseError) {
                    this.error = this.form.parseError(err);
                  } else {
                    this.error = err;
                  }
                })
               .then(() => {
                 this.loading = false
               });
  }

}
