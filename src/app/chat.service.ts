import { Injectable } from "@angular/core";
import { channelService } from "./channel.service";
import { MessegeComponent } from "./messege.component";

@Injectable({
    providedIn:'root'
}
    )
    export class chatService {
    chatBox:MessegeComponent[]=[]; // {messege:'hey',timeStamp:new Date(),userName:'suhrud'}
/**
 *
 */
constructor(private cs:channelService) {
    
    
}

    getAll(){
        console.log(this.chatBox);
        return this.chatBox;
        
    }
    addMessege(m:MessegeComponent){
                    // this.cs.channelList.find(elem=>elem.name)
                this.chatBox.push(m);
    }
    }
    