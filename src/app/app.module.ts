import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './SuccessAlert/SuccessAlert.component';
import { WarningAlertComponent} from './WarningAlert/WarningAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
