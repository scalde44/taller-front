import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/mat-toolbar-row/app-navbar/nav/a[1]'));
    linkMantenimiento = element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/mat-toolbar-row/app-navbar/nav/a[2]'));

    async clickBotonHome() {
        await this.linkHome.click();
    }
    async clickBotonMantenimiento() {
        await this.linkMantenimiento.click();
    }
}
