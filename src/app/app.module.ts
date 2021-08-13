import { DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { HomeComponent } from '@home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MantenimientoModule } from '@mantenimiento/mantenimiento.module';
import { TrmService } from './feature/trm/service/trm.service';
import { TrmComponent } from './feature/trm/trm.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MantenimientoModule,
    CoreModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [TrmService, CookieService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
