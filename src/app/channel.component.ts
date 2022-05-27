import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
    @ViewChild('channel') channel: ElementRef | undefined;

    @Output() open: EventEmitter<string> = new EventEmitter();
    getChannels(){
    return this.cs.getAll();
    }
    setChannelName(chan:string){
        
            this.open.emit(chan);
    }
    createChannel(name:string){
      this.channel!.nativeElement.value=''
        let c:Channel=new Channel();
        c.name=name;
        this.cs.addChannel(c);
      }

}
