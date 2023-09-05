import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { ChildFormComponent } from './main-form/child-form/child-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoUserComponent } from './co-user/co-user.component';
@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    ChildFormComponent,
    CoUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
