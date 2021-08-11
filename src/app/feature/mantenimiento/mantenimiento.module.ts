import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '@shared/shared.module';
import { CrearMantenimientoComponent } from './components/crear-mantenimiento/crear-mantenimiento.component';
import { ListarMantenimientoComponent } from './components/listar-mantenimiento/listar-mantenimiento.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { MenuComponent } from './components/menu/menu.component';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantenimientoService } from './shared/service/mantenimiento.service';
import { ListarMantenimientoHoyComponent } from './components/listar-mantenimiento-hoy/listar-mantenimiento-hoy.component';
import { EliminarMantenimientoComponent } from './components/eliminar-mantenimiento/eliminar-mantenimiento.component';
import { ActualizarMantenimientoComponent } from './components/actualizar-mantenimiento/actualizar-mantenimiento.component';
@NgModule({
  declarations: [
    ListarMantenimientoComponent,
    CrearMantenimientoComponent,
    MantenimientoComponent,
    MenuComponent,
    ListarMantenimientoHoyComponent,
    EliminarMantenimientoComponent,
    ActualizarMantenimientoComponent
  ],
  imports: [
    MantenimientoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    NgxMatNativeDateModule
  ],
  providers: [MantenimientoService, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
})
export class MantenimientoModule { }
