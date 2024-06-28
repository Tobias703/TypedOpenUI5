// @ts-check
import Controller from "sap/ui/core/mvc/Controller";
import Event from "sap/ui/base/Event";
import Input from "sap/m/Input";
import FormattedText from "sap/m/FormattedText";
import UI5Element from "sap/ui/core/Element";

export default class CalculatorPanel extends Controller {
    /**
     * Event handler for the expression change event.
     * @param {Event} oEvent - The event object.
     * @returns {void}
    */
    onExpressionChange(oEvent) {
        /**
         * @param {Event} oEvent - The event object.
         * @type {Input}
         */
        const oInput = oEvent.getSource();
        /** @type {UI5Element | undefined} */
        const oIncorrectResultText = this.byId("incorrectResultText");
        /** @type {UI5Element | undefined} */
        const oCorrectResultText = this.byId("correctResultText");
        /** @type {string} */
        const sExpression = oInput.getValue();

        try {
            /** @type {number} */
            const iIncorrectResult = this.incorrectlyCalculateExpression(sExpression);
            /** @type {number} */
            const iCorrectResult = this.correctlyCalculateExpression(sExpression);

            if (oIncorrectResultText instanceof FormattedText) {
                oIncorrectResultText.setHtmlText("Incorrect Answer: " + iIncorrectResult.toString());
            }
            if (oCorrectResultText instanceof FormattedText) {
                oCorrectResultText.setHtmlText("Correct Answer: " + iCorrectResult.toString());
            }
        } catch (e) {
            if (oIncorrectResultText instanceof FormattedText) {
                oIncorrectResultText.setHtmlText("Incorrect Answer: Invalid Expression");
            }
            if (oCorrectResultText instanceof FormattedText) {
                oCorrectResultText.setHtmlText("Correct Answer: Invalid Expression");
            }
        }
    }

    /**
     * @param {string} sExpression
     * @returns {number}
     */
    incorrectlyCalculateExpression(sExpression) {
        sExpression = sExpression.replace(/\s+/g, '');

        if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
            throw new Error("Invalid Expression");
        }

        /** @type {string[]} */
        const aNumbers = sExpression.split('+');
        /** @type {number} */
        let iResult = 0;

        for (let i = 0; i < aNumbers.length; i++) {
            /** @type {number} */
            const iNumber = Number(aNumbers[i]);
            iResult += iNumber;
        }

        return iResult;
    }

    /**
     * @param {string} sExpression
     * @returns {number}
     */
    correctlyCalculateExpression(sExpression) {
        sExpression = sExpression.replace(/\s+/g, '');

        if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
            throw new Error("Invalid Expression");
        }

        /** @type {string[]} */
        const aNumbers = sExpression.split('+');
        /** @type {number} */
        let iResult = 0;

        for (let i = 0; i < aNumbers.length; i++) {
            /** @type {number} */
            const iNumber = parseInt(aNumbers[i]);
            iResult += iNumber;
        }

        return iResult;
    }
}