import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatdosComponent } from './chatdos/chatdos.component';


const routes: Routes = [
  {path: '', component: ChatdosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
