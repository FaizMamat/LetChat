import { Injectable } from '@angular/core';
import { Conversation } from './interfaces/Conversation';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  
  conversations= new BehaviorSubject<Conversation[]>
  ([{
    username: "John Doe",
    chat:["John Doe : Hi There!",
    "You : Hi There!",
    "John Doe: How are things going?"]
  },
  {
    username: "Chaterine",
    chat:["Chaterine : Hi There!",
    "You : Hi There!",
    "Chaterine: How are things going?"]
  },
  {
    username: "Cathy",
    chat:["Cathy : Hi There!",
    "You : Hi There!",
    "Cathy: How are things going?"]
  },

])


currusername = new BehaviorSubject<string>("Welcome To LetChat")
selectedIdx = new BehaviorSubject<number>(null)
currMsgShown = new BehaviorSubject<string[]>(["Please select user at sidebar to begin chatting"])

isSelected(newIsSelected: number){
  this.selectedIdx.next(newIsSelected)
  const data = this.conversations.getValue()
  this.currusername.next(data[newIsSelected].username)
  this.currMsgShown.next(data[newIsSelected].chat)
}

updateMsg(newMsg: string, userIdx: number){
  const chat = this.currMsgShown.getValue()
  chat.push("You: " + newMsg)
}
constructor() { }

}
