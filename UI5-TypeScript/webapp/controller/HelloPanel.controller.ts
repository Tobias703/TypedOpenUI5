import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import Fragment from "sap/ui/core/Fragment";
import Dialog from "sap/m/Dialog";

export default class HelloPanel extends Controller {
    private oDialog: any;

    public onShowHello(): void {
        const view: any = this.getView();
        const model: any = view.getModel();
        const sRecipient: string = model.getProperty("/recipient/name");
        const sMsg: string = `Hello, ${sRecipient}`;
        MessageToast.show(sMsg);
    }

    public async onOpenDialog(): Promise<void> {
        this.oDialog ??= await Fragment.load({
            name: "ui5.typescript.view.HelloDialog",
            controller: this
        }) as Dialog;
        const view: any = this.getView();
        const oModel = view.getModel();
        this.oDialog.setModel(oModel);
        this.oDialog.open();
    }

    public onCloseDialog(): void {
        this.oDialog.close();
    }
}
