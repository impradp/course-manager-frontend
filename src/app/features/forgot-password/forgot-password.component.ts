import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
  imports: [RouterModule, ReactiveFormsModule, CommonModule, ToastrModule]
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.forgotPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.forgotPasswordForm.invalid) return;

    this.authService.forgotPassword(this.forgotPasswordForm.value.email).subscribe({
      next: () => {
        this.toastr.success('Reset password link sent to email');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.toastr.error(error.error?.message || 'Failed to send reset link');
      }
    });
  }
}
