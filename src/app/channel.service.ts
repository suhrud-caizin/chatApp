import { Injectable } from "@angular/core";
import { throwIfEmpty } from "rxjs";
import { ChatComponent } from "./chat.component";
import { MessegeComponent } from "./messege";
export class Channel {
    name: string = '';
    messegeList: MessegeComponent[] = [];
    userList: string[] = [];
}
@Injectable(
    {
        providedIn: 'root'
    }
)
export class channelService {
    channelList: Channel[] = [{ name: "#GENERAL", messegeList: [], userList: [] }];

    getAllChannelsName(): string[] {
        let temp: string[] = [];
        this.channelList.forEach(elem => temp.push(elem.name));
        return temp;


    }
    addChannel(c: Channel) {
        // c.userList.push(user);
        this.channelList.push(c);



    }
    getUsersByChannel(cname: string) {
        return this.channelList.find(elem => elem.name == cname)!.userList;
    }
    joinChannel(cname: string, user: string) {
        this.channelList.find(elem => elem.name == cname)?.userList.push(user);

    }
    userExistInChannel(cname: string, uname: string): boolean {
        if (cname == "#GENERAL")
            return true;
        return this.channelList.find(elem => elem.name == cname)?.userList.find(elem => elem == uname) ? true : false;
    }

    getByChannelName(cname: string): MessegeComponent[] {
        return this.channelList.find(elem => elem.name == cname)!.messegeList;
    }
    addMessege(mc: MessegeComponent, cname: string) {
        this.channelList.find(elem => elem.name == cname)?.messegeList.push(mc);
    }
    leaveChannel(cname: string, uname: string) {

        console.log(this.channelList);
        let temp = this.channelList!.find(elem => elem.name == cname);
        temp!.userList = temp!.userList.filter(usr => usr != uname);
        console.log(this.channelList);

    }

}
