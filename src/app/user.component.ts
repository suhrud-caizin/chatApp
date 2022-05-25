import { Component } from '@angular/core';
import { Channel, channelService } from './channel.service';
import { chatService } from './chat.service';

@Component({
  selector: 'app-user',
  templateUrl: './app.user.html',
  styleUrls: ['./app.component.css']
})
export class UserComponent {
  title = '';
  constructor(private cs:channelService) {
  }
  users:string[]=[];
  login(userName:string){
    console.log('inside login');
    this.users.push(userName);
    this.cs.channelList[0].userList.push(userName);
    console.log(this.cs.channelList[0].userList);
    
}
createChannel(name:string){
  let c:Channel=new Channel();
  c.name=name;
  this.cs.addChannel(c);
}
}
