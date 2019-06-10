import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'Contacter l\'administrateur';
  }

  ngOnInit() {
  }

}
