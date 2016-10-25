/**
 * Created by rajeshsubramanian on 10/20/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";

@NgModule({
    imports:      [ BrowserModule , FormsModule],
    declarations: [ AppComponent, HeroDetailComponent ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
