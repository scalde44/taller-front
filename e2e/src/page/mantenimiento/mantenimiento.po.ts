import { by, element } from 'protractor';

export class MantenimientoPage {
    private linkListarMantenimientos = element(by.id('linkListarMantenimientos'));
    private linkListarMantenimientosHoy = element(by.id('linkListarMantenimientosHoy'));
    private linkCrearMantenimiento = element(by.id('linkCrearMantenimiento'));
    private listaMantenimientos = element.all(by.css('app-listar-mantenimiento mat-row'));
    private listaMantenimientosHoy = element.all(by.css('app-listar-mantenimiento-hoy tr.mat-row'));
    private inputPlacaMoto = element(by.id('placaMoto'));
    private inputCilindrajeMoto = element(by.id('cilindrajeMoto'));
    private inputFechaMoto = element(by.id('fechaMoto'));
    private buttonCrearMantenimiento = element(by.id('btnCrearMoto'));

    async clickLinkListarMantenimientos() {
        await this.linkListarMantenimientos.click();
    }

    async clickLinkListarMantenimientosHoy() {
        await this.linkListarMantenimientosHoy.click();
    }

    async clickLinkCrearMantenimiento() {
        await this.linkCrearMantenimiento.click();
    }

    async clickBotonCrearMantenimiento() {
        await this.buttonCrearMantenimiento.click();
    }

    async ingresarPlaca(placaMoto) {
        await this.inputPlacaMoto.sendKeys(placaMoto);
    }

    async ingresarCilindraje(cilindrajeMoto) {
        await this.inputCilindrajeMoto.sendKeys(cilindrajeMoto);
    }

    async ingresarFecha(fechaMoto) {
        await this.inputFechaMoto.sendKeys(fechaMoto);
    }

    async contarMantenimientosTotales() {
        return await this.listaMantenimientos.count();
    }

    async contarMantenimientosHoy() {
        return await this.listaMantenimientosHoy.count();
    }
}
