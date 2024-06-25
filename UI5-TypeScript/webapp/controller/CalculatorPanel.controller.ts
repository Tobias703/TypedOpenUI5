import Controller from "sap/ui/core/mvc/Controller";
import UI5Element from "sap/ui/core/Element";
import Event from "sap/ui/base/Event";
import Input from "sap/m/Input";

interface HtmlTextControl {
    setHtmlText: (html: string) => void;
}

export default class CalculatorPanel extends Controller {
    private isHtmlTextControl(control: any): control is HtmlTextControl {
        return control && typeof control.setHtmlText === 'function';
    }

    public onExpressionChange(oEvent: Event): void {
        const oInput = oEvent.getSource() as Input;
        const oIncorrectResultText: UI5Element | undefined = this.byId("incorrectResultText");
        const oCorrectResultText: UI5Element | undefined= this.byId("correctResultText");
        const sExpression: string = oInput.getValue();

        try {
            const iIncorrectResult: number = this.incorrectlyCalculateExpression(sExpression);
            const iCorrectResult: number = this.correctlyCalculateExpression(sExpression);

            if (this.isHtmlTextControl(oIncorrectResultText)) {
                oIncorrectResultText.setHtmlText("Incorrect Answer: " + iIncorrectResult.toString());
            }
            if (this.isHtmlTextControl(oCorrectResultText)) {
                oCorrectResultText.setHtmlText("Correct Answer: " + iCorrectResult.toString());
            }
        } catch (e) {
            if (this.isHtmlTextControl(oIncorrectResultText)) {
                oIncorrectResultText.setHtmlText("Incorrect Answer: Invalid Expression");
            }
            if (this.isHtmlTextControl(oCorrectResultText)) {
                oCorrectResultText.setHtmlText("Correct Answer: Invalid Expression");
            }
        }
    }

    public incorrectlyCalculateExpression(sExpression: string): number {
        sExpression = sExpression.replace(/\s+/g, '');

        if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
            throw new Error("Invalid Expression");
        }

        const aNumbers = sExpression.split('+');
        let iResult = 0;

        for (let i = 0; i < aNumbers.length; i++) {
            const iNumber = Number(aNumbers[i]);
            iResult += iNumber;
        }

        return iResult;
    }

    public correctlyCalculateExpression(sExpression: string): number {
        sExpression = sExpression.replace(/\s+/g, '');

        if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
            throw new Error("Invalid Expression");
        }

        const aNumbers = sExpression.split('+');
        let iResult = 0;

        for (let i = 0; i < aNumbers.length; i++) {
            const iNumber = parseInt(aNumbers[i]);
            iResult += iNumber;
        }

        return iResult;
    }
}