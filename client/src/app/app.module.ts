import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }