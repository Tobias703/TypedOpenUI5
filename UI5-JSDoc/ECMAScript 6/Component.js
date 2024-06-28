// @ts-check
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class Component extends UIComponent {
	static metadata = {
		interfaces: ["sap.ui.core.IAsyncContentCreation"],
		manifest: "json"
	};

	init() {
		super.init();

		// set data model on view
		const oData = {
			recipient: {
				name: "World"
			}
		};
		const oModel = new JSONModel(oData);
		this.setModel(oModel);
	}
};
