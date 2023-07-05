import { Component } from '@angular/core';

interface Message {
  name: string;
  time: Date;
  content: string;
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  messages: Message[] = [];
  name = '';
  content = '';

  addMessage() {
    if (this.name && this.content) {
      this.messages.push({
        name: this.name,
        time: new Date(),
        content: this.content
      });
      this.name = '';
      this.content = '';
    }
  }
  messages1 = this.messages;
}
