import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import Fragment from "sap/ui/core/Fragment";

export default class HelloPanel extends Controller {
    private oDialog : any;

    public onShowHello(): void {
        const sRecipient = this.getView().getModel().getProperty("/recipient/name");
        const sMsg = `Hello, ${sRecipient}`;

        MessageToast.show(sMsg);
    }

    public async onOpenDialog(): Promise<void> {
        this.oDialog = this.oDialog ?? await Fragment.load({
            name: "ui5.javascript.fragment.HelloDialog",
            controller: this
        });

        this.oDialog.open();
    }

    public onCloseDialog(): void {
        const dialog : any = this.byId("helloDialog");
        if (dialog) {
            dialog.close();
        }
    }
}