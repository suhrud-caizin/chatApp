import { Component, EventEmitter, Output } from '@angular/core';
import { Channel, channelService } from './channel.service';
import { chatService } from './chat.service';

@Component({
  selector: 'app-channel',
  templateUrl: './app.channel.html',
  styleUrls: ['./app.component.css']
})
export class ChannelComponent {
    /**
     *
     */
    constructor(private cs:channelService) {}
    @Output() open: EventEmitter<string> = new EventEmitter();
    getChannels(){
    return this.cs.getAll();
    }
    setChannelName(chan:string){
        
            this.open.emit(chan);
    }
    createChannel(name:string){
        let c:Channel=new Channel();
        c.name=name;
        this.cs.addChannel(c);
      }

}
