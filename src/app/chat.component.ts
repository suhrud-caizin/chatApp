import { CssSelector } from "@angular/compiler";
import { Component, Input } from "@angular/core";
import { channelService } from "./channel.service";
import { chatService } from "./chat.service";
import { MessegeComponent } from "./messege.component";

@Component({
    selector: 'app-chat',
    templateUrl: './app.chat.html',
    styleUrls: ['./app.component.css']
    
  })
  export class ChatComponent {
  /**
   *
   */
  constructor(private cs:channelService) {
  }
    @Input()userName:string='';
    @Input()channelName:string='';
    login(userName:string){
            this.userName=userName;
            console.log(userName);
    }
 
    addMessege(m:string,cname:string='#GENERAL'){
      
      let mc=new MessegeComponent();
      mc.messege=m;
      mc.timeStamp=new Date();
      mc.userName=this.userName; 
      this.cs.addMessege(mc,this.channelName);
}
    isSubscribed(){
      if(this.channelName=='#GENERAL'){
        console.log("success");
          return true;
      }
      return this.cs.userExistInChannel(this.channelName,this.userName);
    }
    subscribe(){
      this.cs.joinChannel(this.channelName,this.userName);
    }


  }
  