import { Channel } from "./channel";
import { MessegeComponent } from "./messege";


export interface IChatService {
    getAllChannelsName():string[];
    addChannel(c: Channel):void;
    getUsersByChannel(cname: string):string[];
    joinChannel(cname: string, user: string):void;
    getByChannelName(cname: string): MessegeComponent[];
    addMessege(mc: MessegeComponent, cname: string):void;
    leaveChannel(cname: string, uname: string):void;
}
