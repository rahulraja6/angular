import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent ,
  children : [
  {path: ':id', component: MainContentComponent},
  {path: '', component: MainContentComponent}] },
  {path: '**' , redirectTo : '' },
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [ UserService],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, SidenavComponent, MainContentComponent]
})
export class ContactmanagerModule { }
