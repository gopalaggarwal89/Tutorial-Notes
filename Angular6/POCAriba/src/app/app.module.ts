import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRecordsComponent } from './user-records/user-records.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CountryTabComponent } from './country-tab/country-tab.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { TestService } from './test.service';
import { UserRecordService } from './user-record.service';

@NgModule({
  declarations: [
    AppComponent,
    UserRecordsComponent,
    UserInfoComponent,
    CountryTabComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [TestService, UserRecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
