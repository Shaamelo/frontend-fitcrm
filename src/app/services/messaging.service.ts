import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../types/Email';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  URL: string = 'http://localhost:8080/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(email: Email): Observable<any> {
    return this.http.post(this.URL, email);
  }
}
