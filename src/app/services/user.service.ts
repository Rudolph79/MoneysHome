import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;
  public identity;
  public token;

  constructor(private myHttp: HttpClient) {
    this.url = GLOBAL.url;
  }

  signup(userToLogin) {
    const json = JSON.stringify(userToLogin);
    const params = 'json=' + json;
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.myHttp.post(this.url + '/signin', params, {headers})
      .pipe(map((res: Response) => res.json()));
  }
}
