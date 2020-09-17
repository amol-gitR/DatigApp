import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }
  registerMode = false;
  // tslint:disable-next-line:typedef
  ngOnInit() {}
  registerToggle()
  {
    this.registerMode = true;
  }
    cancelRegisterMode(registerMode:boolean)
    {
      this.registerMode = registerMode;
    }
}
