import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'Supprimer votre compte';
  }

  ngOnInit() {
  }

}
