import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupModel } from '../models/signup.model';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [RouterLink, RouterModule,ReactiveFormsModule, CommonModule]
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      username: ['', [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(20)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
      confirmPassword: ['', Validators.required]
    }, { 
      validators: this.passwordMatchValidator 
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    return password && confirmPassword && password.value === confirmPassword.value 
      ? null 
      : { passwordMismatch: true };
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    const signupData: SignupModel = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };

    this.signupService.signup(signupData).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.errorMessage = error.message || 'Signup failed';
        console.error('Signup error', error);
      }
    });
  }

  // Getter for easy access to form fields
  get f() { return this.signupForm.controls; }
}