import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'Mise à jour du profil';
  }

  ngOnInit() {
  }

}
