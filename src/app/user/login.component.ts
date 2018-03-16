import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}