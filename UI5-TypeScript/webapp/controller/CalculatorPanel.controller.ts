import Controller from "sap/ui/core/mvc/Controller";
import Event from "sap/ui/base/Event";
import Input from "sap/m/Input";
import FormattedText from "sap/m/FormattedText";

export default class CalculatorPanel extends Controller {
    public onExpressionChange(oEvent: Event): void {
        const oInput: Input = oEvent.getSource() as Input;
        if(this.byId("incorrectResultText")){}
        const oIncorrectResultText: FormattedText | undefined = this.byId("incorrectResultText") as FormattedText | undefined;
        const oCorrectResultText: FormattedText | undefined = this.byId("correctResultText") as FormattedText | undefined;
        const sExpression: string = oInput.getValue();

        try {
            const iIncorrectResult: number = this.incorrectlyCalculateExpression(sExpression);
            const iCorrectResult: number = this.correctlyCalculateExpression(sExpression);

            if (oIncorrectResultText) {
                oIncorrectResultText.setHtmlText("Incorrect Answer: " + iIncorrectResult.toString());
            }
            if (oCorrectResultText) {
                oCorrectResultText.setHtmlText("Correct Answer: " + iCorrectResult.toString());
            }
        } catch (e) {
            if (oIncorrectResultText) {
                oIncorrectResultText.setHtmlText("Incorrect Answer: Invalid Expression");
            }
            if (oCorrectResultText) {
                oCorrectResultText.setHtmlText("Correct Answer: Invalid Expression");
            }
        }
    }

    public incorrectlyCalculateExpression(sExpression: string): number {
        sExpression = sExpression.replace(/\s+/g, '');

        if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
            throw new Error("Invalid Expression");
        }

        const aNumbers: string[] = sExpression.split('+');
        let iResult: number = 0;

        for (let i = 0; i < aNumbers.length; i++) {
            const iNumber: number = aNumbers[i];
            iResult += iNumber;
        }

        return iResult;
    }

    public correctlyCalculateExpression(sExpression: string): number {
        sExpression = sExpression.replace(/\s+/g, '');

        if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
            throw new Error("Invalid Expression");
        }

        const aNumbers: string[] = sExpression.split('+');
        let iResult: number = 0;

        for (let i = 0; i < aNumbers.length; i++) {
            const iNumber: number = parseInt(aNumbers[i]);
            iResult += iNumber;
        }

        return iResult;
    }
}