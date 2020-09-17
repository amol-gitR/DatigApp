import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService) { }
  model: any = {};

 @Output() cancelRegister = new EventEmitter();
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
   // tslint:disable-next-line:typedef
   register()
   {
     this.authService.register(this.model)
     .subscribe(() => {
      this.alertify.success('registration Successful');
      // console.log('registration Successful');
     }, error => {
       this.alertify.error(error);
       // console.log(error);
     });
   }
   // tslint:disable-next-line:typedef
   cancel()
   {
     this.cancelRegister.emit(false);
     // console.log('cancelled');
   }

}
