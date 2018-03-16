import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/observable/timer';

import { UserService } from '../_services/index';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class RegisterComponent {
  res: any = {
    agree: false
  };

  constructor(
    private location: Location,
    private http: HttpClient,
    private userService: UserService
  ) { 
  }
  

  onSendCode(): Observable<boolean> {
    return Observable.timer(1000).map((v, i) => true);
  }

  getSendCode(){
    this.userService.getSendCode(this.res.phone)
    .subscribe(data => console.log(data));

  }

  onSave() {
    console.log(this.res);
  }

}