import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.typescript
 */

export default class Component extends UIComponent {
	public static metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json"
    };
	
	public init(): void {
		super.init();

		const oData = {
            recipient: {
                name: "World"
            }
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);
	}
}
