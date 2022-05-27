

import { CssSelector } from "@angular/compiler";
import { Component, Input } from "@angular/core";
import { channelService } from "./channel.service";

@Component({
    selector: 'app-chatwin',
    templateUrl: './chat.window.html',
    styleUrls: ['./app.window.css']
    
  })
  export class ChatWindowComponent {
  /**
   *
   */
  constructor(private cs:channelService) {
  }
    @Input()userName:string='';
    @Input()channelName:string='';
 
userExistInChannel(){
    if(!this.userName){
        return false
    }
      if(this.channelName=='#GENERAL'){
        console.log("success");
          return true;
      }
      return this.cs.userExistInChannel(this.channelName,this.userName);
    }
    getAll(){
        return this.cs.getByChannelName(this.channelName);
    }
    leaveChannel(){
      this.cs.leaveChannel(this.channelName,this.userName);
     
    }
    subscribe(){
      this.cs.joinChannel(this.channelName,this.userName);
    }


  }
  