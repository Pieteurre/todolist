import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {} from '@angular/material/form-field';
import {} from '@angular/material/input';
import {} from '@angular/material/button';
import {} from '@angular/material/icon';
import {} from '@angular/material/list';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatListModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
