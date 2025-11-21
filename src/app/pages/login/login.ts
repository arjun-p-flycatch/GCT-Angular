import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { InputComponent } from '../../shared/components/common-components/custom-input/custom-input';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/common-components/custom-button/custom-button';
import { ValidationService } from '../../core/services/validationService/validation-service';
import { LoginService, LoginRequest } from '../../core/services/loginService/login-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  hidePassword = true;
  isLoading = false;
  private validationService = inject(ValidationService);
  private LoginService = inject(LoginService);

  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(100), Validators.minLength(4)],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(100)],
    }),
  });
  usernameError = signal('');
  isFormSubmitted = false;
  onSubmit() {
    // if (this.form.invalid) {
    //   this.form.markAllAsTouched();
    //   return;
    // }
    this.isFormSubmitted = true;
    console.log('Form submitted:', this.loginForm.value);
    const loginData: LoginRequest = {
      username: this.loginForm.value.username?.trim() || '',
      password: this.loginForm.value.password || '',
    };
    this.LoginService.login(loginData).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          console.log('login successful :', response.message);
        }
      },
    });
  }

  validateInput(controlName: string): string {
    return this.validationService.getValidationMessage(
      {
        controlName,
        messagesConfig: {
          username: {
            required: 'Username is required',
            email: 'please enter valid email',
          },
          password: {
            required: 'Password is required',
            minlength: 'Password must be at least 4 characters long',
          },
        },
      },
      this.loginForm.get(controlName),
      this.isFormSubmitted
    );
  }
}
