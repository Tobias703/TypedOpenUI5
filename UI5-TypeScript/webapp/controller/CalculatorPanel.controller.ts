import Controller from "sap/ui/core/mvc/Controller";

export default class CalculatorPanel extends Controller {
    public onExpressionChange(oEvent: any): void {
        const oInput = oEvent.getSource();
        const oIncorrectResultText : any = this.byId("incorrectResultText");
        const oCorrectResultText : any = this.byId("correctResultText");
        const sExpression = oInput.getValue();

        try {
            const iIncorrectResult : number = this.incorrectlyCalculateExpression(sExpression);
            const iCorrectResult : number = this.correctlyCalculateExpression(sExpression);

            oIncorrectResultText.setHtmlText("Incorrect Answer: " + iIncorrectResult.toString());
            oCorrectResultText.setHtmlText("Correct Answer: " + iCorrectResult.toString());
        } catch (e) {
            oIncorrectResultText.setHtmlText("Incorrect Answer: Invalid Expression");
            oCorrectResultText.setHtmlText("Correct Answer: Invalid Expression");
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