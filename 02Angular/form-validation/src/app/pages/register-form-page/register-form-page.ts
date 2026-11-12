import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form-page',
  styleUrl: './register-form-page.css',
  templateUrl: './register-form-page.html',
})
export class RegisterFormPage {
   registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  isInvalidField(field: string) {
    return this.registerForm.get(field)?.invalid && (this.registerForm.get(field)?.dirty || this.registerForm.get(field)?.touched);
  }

}
