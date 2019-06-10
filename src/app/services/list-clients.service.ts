import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GLOBAL} from './global';
import {map} from 'rxjs/operators';

export interface Clients {
  phone_number: string;
  nom: string;
  family_name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListClientsService {

  constructor() {
    this.url = GLOBAL.url;
  }

  getListClients(): Observable<Clients[]> {
    return this.http.get(this.url + '/list/client',
      new RequestOptions({ headers: this.headers })
    )
      .map(res => res.json());
  }

  /*
  return this.myHttp.post(this.url + '/signin', params, {headers})
      .pipe(map((res: Response) => res.json()));
   */
}
