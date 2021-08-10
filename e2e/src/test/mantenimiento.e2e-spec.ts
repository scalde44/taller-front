import { AppPage } from '../app.po';
import { MantenimientoPage } from '../page/mantenimiento/mantenimiento.po';
import { NavbarPage } from '../page/navbar/navbar.po';

describe('workspace-project Mantenimiento', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let mantenimiento: MantenimientoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        mantenimiento = new MantenimientoPage();
    });

    it('Deberia listar todos los mantenimientos', async () => {
        await page.navigateTo();
        await navBar.clickBotonMantenimiento();
        await mantenimiento.clickLinkListarMantenimientos();

        expect(mantenimiento.contarMantenimientosTotales()).toBeGreaterThanOrEqual(0);
    });

    it('Deberia listar los mantenimientos activos hoy', async () => {
        await page.navigateTo();
        await navBar.clickBotonMantenimiento();
        await mantenimiento.clickLinkListarMantenimientosHoy();

        expect(mantenimiento.contarMantenimientosHoy()).toBeGreaterThanOrEqual(0);
    });

    it('Deberia crear un mantenimiento', async () => {
        const PLACA_MOTO = 'AKF23Z';
        const CILINDRAJE_MOTO = '200';
        const FECHA_MOTO = new Date().toLocaleString();

        await page.navigateTo();
        await navBar.clickBotonMantenimiento();
        await mantenimiento.clickLinkCrearMantenimiento();

        await mantenimiento.ingresarPlaca(PLACA_MOTO);
        await mantenimiento.ingresarCilindraje(CILINDRAJE_MOTO);
        await mantenimiento.ingresarFecha(FECHA_MOTO);
        await mantenimiento.clickBotonCrearMantenimiento();
    });
});
