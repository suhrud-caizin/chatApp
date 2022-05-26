import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Channel, channelService } from './channel.service';
import { chatService } from './chat.service';

@Component({
  selector: 'app-user',
  templateUrl: './app.user.html',
  styleUrls: ['./app.component.css']
})
export class UserComponent {
  title = '';
  @Output() uname: EventEmitter<string> = new EventEmitter();
  constructor(private cs:channelService) {
  }
  // users:string[]=[];
  user:string='';
  @Input()channelName:string='';
  login(userName:string){
    console.log('inside login');
    // this.users.push(userName);
    this.user=userName;
    this.cs.channelList[0].userList.push(userName);
    console.log(this.cs.channelList[0].userList);
    this.uname.emit(userName);
}
getUsersByChannelName(){
  return this.cs.getUsersByChannel(this.channelName);
}

}
