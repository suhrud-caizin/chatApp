import { CssSelector } from "@angular/compiler";
import { Component } from "@angular/core";
import { channelService } from "./channel.service";
import { chatService } from "./chat.service";
import { MessegeComponent } from "./messege.component";

@Component({
    selector: 'app-disp',
    templateUrl: './app.disp.html',
    styleUrls: ['./app.component.css']
    // ,
    // providers:[channelService]
    
  })
  export class DisplayComponent {
  /**
   *
   */
  constructor(private cs:channelService) {
  }
  channelName:string='#GENERAL';
  userName:string=''
  getAll(){
    return this.cs.getByChannelName(this.channelName);
  }
  setChannelName($event:any){
  
        this.channelName=$event;
        // this.cs.currentChannel=$event;
        return this.cs.getByChannelName(this.channelName);
  }
  getChannels(){
      return this.cs.getAll();
  }
  setUserName($event:any){
      this.userName=$event;
  }
  userExistInChannel(){
    return this.cs.userExistInChannel(this.channelName,this.userName);
  }
   

  }
  