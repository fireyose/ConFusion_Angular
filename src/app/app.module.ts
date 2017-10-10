import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdCheckboxModule, MdGridListModule, MdCardModule, MdCommonModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailsComponent } from './dishdetails/dishdetails.component';

// Providers/Services
import { DishService } from './services/dish.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdCardModule,
    MdCommonModule,
    FlexLayoutModule
  ],
  providers: [
    DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
