// @ts-check
import Controller from "sap/ui/core/mvc/Controller";
import Log from "sap/base/Log";

export default class App extends Controller {
    onInit() {
        Log.setLevel(Log.Level.WARNING);
    }
}