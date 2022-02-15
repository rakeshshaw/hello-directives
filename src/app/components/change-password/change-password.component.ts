import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonValidators } from '../../common/validators/common-validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      oldPassword: ['', [Validators.required, CommonValidators.cannotContainSpace], CommonValidators.oldPasswordNotMatched],
      newPassword: ['', [Validators.required, Validators.minLength]],
      confirmPassword: ['', Validators.required]
    }, {validator: CommonValidators.confirmPasswordNotMatched});
   }

  ngOnInit() {
  }

  // form = new FormGroup({
  //   oldPassword: new FormControl('', [Validators.required, CommonValidators.cannotContainSpace], CommonValidators.oldPasswordNotMatched),
  //   newPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   confirmPassword: new FormControl('', Validators.required)
  // }, CommonValidators.confirmPasswordNotMatched);

  submit() {
    // this.form.setErrors({invalidPassword: true});
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
