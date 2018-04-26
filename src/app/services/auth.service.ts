import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private BASE_URL: string = 'http://insightdemo.com/insight/v2/auth';
  private headers: Headers = new Headers({'password': 'inetco', 'username': 'admin', 'group': 'users'});
  constructor(private http: Http) {}
  login(user): Promise<any> {
    let url: string = `${this.BASE_URL}`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
}
