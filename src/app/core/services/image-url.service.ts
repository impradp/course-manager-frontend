// src/app/core/services/image-url.service.ts
import { Injectable } from '@angular/core'; 
import { environment } from './../../environment';

@Injectable({
  providedIn: 'root'
})
export class ImageUrlService {
  getProfileImageUrl(avatar: string | null | undefined): string {
    if (!avatar) {
      return 'assets/icon-profile.png';
    }
    
    // If the avatar already starts with http or /api, return as is
    if (avatar.startsWith('http') || avatar.startsWith('/api')) {
      return avatar;
    }
    
    // Otherwise, construct the full URL
    return `${environment.apiUrl}/files/profile-image/${avatar}`;
  }
}