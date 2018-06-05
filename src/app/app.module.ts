import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapBoxComponent, DialogOverviewExampleComponent } from './map-box/map-box.component';
import { environment } from '../environments/environment';
import { MapService } from './map.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent,
    DialogOverviewExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    MapService
  ],
  entryComponents: [
    DialogOverviewExampleComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
