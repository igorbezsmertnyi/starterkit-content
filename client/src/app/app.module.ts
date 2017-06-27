//Modules
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdSliderModule, MdInputModule,
         MdSelectModule, MdIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
//Services
import { StateService } from './states.service';
import { StoreService } from './store.service';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdSliderModule,
    MdInputModule,
    MdSelectModule,
    MdIconModule,
    MdButtonModule
  ],
  providers: [
    StateService,
    StoreService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
