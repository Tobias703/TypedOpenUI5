sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";

	return Controller.extend("ui5.typescript.controller.HelloPanel", {
		onShowHello() {
			// create msg from User Input
			const sRecipient = this.getView().getModel().getProperty("/recipient/name");
    		const sMsg = `Hello, ${sRecipient}`;

			// show message
			MessageToast.show(sMsg);
		},

		async onOpenDialog() {
			this.oDialog ??= await this.loadFragment({
				name: "ui5.typescript.view.HelloDialog"
			});

			this.oDialog.open();
		},

		onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		}
	});
});
