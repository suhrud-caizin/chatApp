import { Component } from '@angular/core';
import { Channel, channelService } from './channel.service';
import { chatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'np-chatapp';
}
