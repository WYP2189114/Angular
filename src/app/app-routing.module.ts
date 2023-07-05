import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { MemberComponent } from './member/member.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: 'forum', component: ForumComponent },
  { path: 'member', component: MemberComponent},
  // { path: 'index',  component: IndexComponent },
  { path: ' ',  component: IndexComponent },
  { path: '**',redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
