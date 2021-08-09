import { AppPage } from "../app.po";
import { MantenimientoPage } from "../page/mantenimiento/mantenimiento.po";
import { NavbarPage } from "../page/navbar/navbar.po";

describe('workspace-project Mantenimiento', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let mantenimiento: MantenimientoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        mantenimiento = new MantenimientoPage();
    });

    it('Deberia listar mantenimientos', async() => {
        await page.navigateTo();
        await navBar.clickBotonMantenimiento();
        await mantenimiento.clickBotonListarMantenimientos();

        expect(mantenimiento.contarMantenimientos()).toBeGreaterThanOrEqual(0);
    });
});