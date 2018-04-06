import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ActiveGroupsComponent } from './components/active-groups/active-groups.component';
import { GroupsToBeOpenComponent } from './components/groups-to-be-open/groups-to-be-open.component';
import { ClosedGroupsComponent } from './components/closed-groups/closed-groups.component';
import { DescriptionDetailComponent } from './components/description-detail/description-detail.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './components/login/login.guard';
import { NoLoginGuard } from './components/login/no-login.guard';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'openTopics', component: ActiveGroupsComponent, canActivate: [NoLoginGuard] },
  { path: 'topicsToBeOpen', component: GroupsToBeOpenComponent, canActivate: [NoLoginGuard] },
  { path: 'closedGroups', component: ClosedGroupsComponent, canActivate: [NoLoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
