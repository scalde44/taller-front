import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMantenimientoComponent } from './components/crear-mantenimiento/crear-mantenimiento.component';
import { ListarMantenimientoHoyComponent } from './components/listar-mantenimiento-hoy/listar-mantenimiento-hoy.component';
import { ListarMantenimientoComponent } from './components/listar-mantenimiento/listar-mantenimiento.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
    {
        path: '',
        component: MantenimientoComponent,
        children: [
            {
                path: '',
                component: MenuComponent
            },
            {
                path: 'listar',
                component: ListarMantenimientoComponent
            },
            {
                path: 'listar-hoy',
                component: ListarMantenimientoHoyComponent
            },
            {
                path: 'crear',
                component: CrearMantenimientoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MantenimientoRoutingModule {
}
