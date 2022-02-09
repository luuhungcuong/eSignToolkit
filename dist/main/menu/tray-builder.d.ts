import { Tray, Menu } from 'electron';
export default class TrayBuilder {
    menu: Menu;
    icon: string;
    constructor(menu: Menu, icon: string);
    buildTray: () => Tray;
}
//# sourceMappingURL=tray-builder.d.ts.map