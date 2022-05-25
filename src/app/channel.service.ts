import { Injectable } from "@angular/core";
import { throwIfEmpty } from "rxjs";
import { ChatComponent } from "./chat.component";
import { MessegeComponent } from "./messege.component";
export class Channel{
    name:string='';
    messegeList:MessegeComponent[]=[];
    userList:string[]=[];
}
@Injectable(
//     {
//     providedIn:'root'
// }
    )
    export  class channelService {
        channelList:Channel[]=[{name:"#GENERAL",messegeList:[],userList:[]}];
        currentChannel:string='#GENERAL';
        setCurrentChannel(channel:string){
                    this.currentChannel=channel;
        }
        getAll():string[]{
            let temp:string[]=[];
            this.channelList.forEach(elem=>temp.push(elem.name));
            return temp;


        }
        addChannel(c:Channel){
            // c.userList.push(user);
                this.channelList.push(c);
                
                
        }
        joinChannel(cname:string,user:string){
            this.channelList.find(elem=>elem.name==cname)?.userList.push(user);

        }
        userExistInChannel(cname:string,uname:string):boolean{
            if(cname=="#GENERAL")
            return true;
                return this.channelList.find(elem=>elem.name==cname)?.userList.find(elem=>elem==uname)?true:false;
        }

        getByChannelName(cname:string):MessegeComponent[]{
                return this.channelList.find(elem=>elem.name==cname)!.messegeList;
        }
        addMessege(mc:MessegeComponent,cname:string){
                    this.channelList.find(elem=>elem.name==cname)?.messegeList.push(mc);
        }
    
    }
    