import { Component, OnInit} from '@angular/core';
import { Conversation} from '../interfaces/Conversation';
import { ChatService} from '../chat.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  coversations:Conversation[]
  messages :string[]
  curruser : string
  selectedIdx : number

  constructor(private service :ChatService) { }

  ngOnInit() {
    this.service.selectedIdx.subscribe(value => {
      this.selectedIdx = value
      const currentconversation = this.service.conversations.getValue()
      this.coversations = currentconversation
    })
    this.service.currMsgShown.subscribe(value => {
        this.messages = value
    })

    this.service.currusername.subscribe(value => {
      this.curruser = value
    })
  }


ChangeTheUserList(idx){
  this.service.isSelected(idx)
}

}

