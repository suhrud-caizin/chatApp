import { Component } from "@angular/core";

@Component({
    selector: 'app-msg',
    templateUrl: './app.messege.html',
    styleUrls: ['./app.component.css']
  })
  export class MessegeComponent {
  
    messege:string='';
    timeStamp:Date=new Date();
    userName:string='';

  }
  