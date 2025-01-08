import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { ImageUrlService } from '../../core/services/image-url.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  currentUser: User | null = null;
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private toastr: ToastrService,
    private imageUrlService: ImageUrlService
  ) {
    this.profileForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.profileForm.patchValue({
          name: user.name,
          email: user.email
        });
      }
    });
  }

  getProfileImageUrl(): string {
    return this.previewUrl || this.imageUrlService.getProfileImageUrl(this.currentUser?.avatar);
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit() {
    if (this.profileForm.pristine && !this.selectedFile) {
      return;
    }

    try {
      // First update profile image if there's a new file
      if (this.selectedFile) {
        await this.userService.updateProfileImage(this.selectedFile).toPromise();
      }

      // Then update other profile information if form is dirty
      if (this.profileForm.dirty) {
        await this.userService.updateProfile(this.currentUser?.id,this.profileForm.value).toPromise();
      }

      this.toastr.success('Profile updated successfully');
      // Refresh current user data
      await this.authService.getCurrentUser();
    } catch (error) {
      this.toastr.error('Failed to update profile');
      console.error('Profile update error:', error);
    }
  }
}