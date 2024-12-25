import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  submitted = false;
  token: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value 
      ? null 
      : { passwordMismatch: true };
  }

  get f() { return this.resetForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.resetForm.invalid) return;

    this.authService.resetPassword(this.token, this.resetForm.value.password).subscribe({
      next: () => {
        this.toastr.success('Password reset successful');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.toastr.error(error.error?.message || 'Password reset failed');
      }
    });
  }
}
