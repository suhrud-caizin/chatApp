import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Channel } from './channel';
import {  channelService } from './channel.service';

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
    @Input()userName:string='';
    @Output() open: EventEmitter<string> = new EventEmitter();
    getChannels(){
    return this.cs.getAllChannelsName();
    }
    setChannelName(chan:string){
        
            this.open.emit(chan);
    }
    createChannel(name:string){
      this.channel!.nativeElement.value=''
      if(name){
        let c:Channel=new Channel();
        c.name=name;
        this.cs.addChannel(c);
      }
      }

}
