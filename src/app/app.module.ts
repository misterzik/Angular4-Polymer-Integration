import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PolymerModule } from '@codebakery/origami';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaperButtonComponent } from './paper-button/paper-button.component';
import { PaperInputComponent } from './paper-input/paper-input.component';
import { PaperCheckboxComponent } from './paper-checkbox/paper-checkbox.component';
import { PaperToggleBtnComponent } from './paper-toggle-btn/paper-toggle-btn.component';
import { PaperProgressComponent } from './paper-progress/paper-progress.component';
import { PaperSliderComponent } from './paper-slider/paper-slider.component';
import { PaperStylesComponent } from './paper-styles/paper-styles.component';
import { PaperItemComponent } from './paper-item/paper-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PaperButtonComponent,
    PaperInputComponent,
    PaperCheckboxComponent,
    PaperToggleBtnComponent,
    PaperProgressComponent,
    PaperSliderComponent,
    PaperStylesComponent,
    PaperItemComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    PolymerModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
