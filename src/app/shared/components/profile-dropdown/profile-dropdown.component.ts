import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ImageUrlService } from '../../../core/services/image-url.service';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user.model';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.css'
})
export class ProfileDropdownComponent {
  @Input() user: User | null = null;
  
  @Output() logout = new EventEmitter<void>();
  @Output() profileNavigate = new EventEmitter<void>();
  @Output() settingsNavigate = new EventEmitter<void>();

  @ViewChild('dropdownContainer', { static: false }) dropdownContainer!: ElementRef;

  isDropdownOpen = false;
  
  constructor(
    private dialog: Dialog,
    private elementRef: ElementRef,
    private imageUrlService: ImageUrlService,
    private router: Router
  ) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onLogout(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirm Logout',
        message: 'Are you sure you want to log out?'
      }
    });

    dialogRef.closed.subscribe(result => {
      if (result) {
        this.logout.emit();
        this.isDropdownOpen = false;
      }
    });
  }

  getProfileImageUrl(): string {
    return this.imageUrlService.getProfileImageUrl(this.user?.avatar);
  }

  navigateToProfile(): void {
    this.router.navigate(['/dashboard/profile']);
    this.isDropdownOpen = false;
  }

  navigateToSettings(): void {
    this.settingsNavigate.emit();
    this.isDropdownOpen = false;
  }
}