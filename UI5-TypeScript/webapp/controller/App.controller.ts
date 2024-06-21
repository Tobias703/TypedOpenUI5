import Controller from "sap/ui/core/mvc/Controller";
import Log from "sap/base/Log";

/**
 * @namespace ui5.typescript.controller
 */
export default class App extends Controller {
    public onInit(): void {
        Log.setLevel(Log.Level.WARNING);
    }
}