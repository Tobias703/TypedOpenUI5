sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";

	return Controller.extend("ui5.javascript.controller.HelloPanel", {
		onShowHello() {
			const sRecipient = this.getView().getModel().getProperty("/recipient/name");
			const sMsg = `Hello, ${sRecipient}`;
			MessageToast.show(sMsg);
		},

		async onOpenDialog() {
			this.oDialog ??= await this.loadFragment({
				name: "ui5.javascript.view.HelloDialog"
			});
			this.oDialog.open();
		},

		onCloseDialog() {
			this.byId("helloDialog").close();
		}
	});
});
