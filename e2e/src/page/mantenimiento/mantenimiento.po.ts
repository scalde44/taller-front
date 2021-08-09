import { by, element } from "protractor";

export class MantenimientoPage {
    private linkListarMantenimientos = element(by.id('linkListarMantenimientos'));
    private tituloListaMantenimientos = element(by.id('tituloListaMantenimientos'));
    private listaMantenimientos = element.all(by.css('app-listar-mantenimiento tr.mat-row'));
    async clickBotonListarMantenimientos() {
        await this.linkListarMantenimientos.click();
    }

    getTitleText() {
        return this.tituloListaMantenimientos.getText() as Promise<string>;
    }

    async contarMantenimientos() {
        return await this.listaMantenimientos.count();
    }
}