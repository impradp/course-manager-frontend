import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
  imports: [CommonModule, ProfileDropdownComponent]
})
export class NavbarComponent {
  currentUser$: Observable<User | null>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.currentUser$ = this.authService.getCurrentUser();
  }

  toggleSidebar(): void {
    // Implement sidebar toggle logic
    console.log('Toggle Sidebar');
  }

  handleLogout(): void {
    this.authService.logout();
    this.toastr.success('Logout successful', 'Success');
    this.router.navigate(['/login']);
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']);
  }

  navigateToSettings(): void {
    this.router.navigate(['/settings']);
  }
}