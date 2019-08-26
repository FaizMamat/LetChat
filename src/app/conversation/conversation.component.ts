import { Component, OnInit } from '@angular/core';
import { Conversation} from '../interfaces/Conversation';
import { FormControl,Validators } from '@angular/forms';
import { ChatService} from '../chat.service';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  conversation:Conversation[]
  chats :string[]
  curruser : string
  selectedIdx : number
  errMessage: string

  newMessage = new FormControl('',[Validators.required ,Validators.maxLength(255)])

  constructor(private service :ChatService) { }

  ngOnInit() {
    this.service.selectedIdx.subscribe(value => {
      this.selectedIdx = value
      const currentdata = this.service.conversations.getValue()
      this.conversation = currentdata
    })
   
    this.service.currMsgShown.subscribe(value => {
        this.chats = value
    })

    this.service.currusername.subscribe(value => {
      this.curruser = value
    })
  }

  onSubmit(){
    if (!this.newMessage.invalid)
    {this.service.updateMsg(this.newMessage.value,this.selectedIdx)}
  }
  
  getErrorMessages(){
    let errorMessages = []
    let errors = this.newMessage.errors
    if(errors){
      for(let errorKey of Object.keys(errors)){
        
        if(errorKey === "required"){
          errorMessages.push("Message cannot be blank")
        }
        if(errorKey === "maxlength"){
          errorMessages.push("message cannot exceed 255 characters. Your current character length is " + errors[errorKey].actualLength)
        }
      }
    }
    return errorMessages
  }
}

 
