import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {error, log} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string;
  public user;

  constructor(
    private myRoute: ActivatedRoute,
    private myRouter: Router,
    private myUserService: UserService
  ) {
    this.title = 'Connexion';
    this.user = {
      email : '',
      password : ''
    };
  }

  ngOnInit() {
    console.log('The page of Login');
  }

  onSubmit() {
    console.log(this.user);
    console.log(JSON.parse(localStorage.getItem('identity')));

    this.myUserService.signup(this.user).subscribe(
      response => {
        this.myUserService.identity = response;

        if (this.myUserService.identity.length <= 1) {
          console.log('Error of the Service');
        } else {
          if (!this.myUserService.identity.status) {
            localStorage.setItem('identity', JSON.stringify(this.myUserService.identity));
          }
        }
      },
      error1 => {
        console.log(error as any);
      }
    );
  }
}

