import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupModel } from '../models/signup.model';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private apiService: ApiService) {}

  signup(signupData: SignupModel): Observable<any> {
    return this.apiService.post('/auth/sign-up', signupData);
  }
}
