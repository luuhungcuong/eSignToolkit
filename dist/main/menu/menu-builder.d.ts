import { BrowserWindow, Menu } from 'electron';
export default class MenuBuilder {
    mainWindow: BrowserWindow;
    constructor(mainWindow: BrowserWindow);
    buildMenu(menuType: string): Menu;
    setupDevelopmentEnvironment(): void;
    buildDarwinMenuForEContract(): Menu;
    buildMenuForEContract(): Menu;
}
//# sourceMappingURL=menu-builder.d.ts.map