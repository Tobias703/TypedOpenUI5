sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("ui5.javascript.controller.CalculatorPanel", {
        onExpressionChange: function (oEvent) {
            const oInput = oEvent.getSource();
            const oIncorrectResultText = this.byId("incorrectResultText");
            const oCorrectResultText = this.byId("correctResultText");
            const sExpression = oInput.getValue();

            try {
                const iIncorrectResult = this.incorrectlyCalculateExpression(sExpression);
                const iCorrectResult = this.correctlyCalculateExpression(sExpression);

                oIncorrectResultText.setHtmlText("Incorrect Answer: " + iIncorrectResult.toString());
                oCorrectResultText.setHtmlText("Correct Answer: " + iCorrectResult.toString());
            } catch (e) {
                oIncorrectResultText.setHtmlText("Incorrect Answer: Invalid Expression");
                oCorrectResultText.setHtmlText("Correct Answer: Invalid Expression");
            }
        },

        incorrectlyCalculateExpression: function (sExpression) {
            sExpression = sExpression.replace(/\s+/g, '');
            if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
                throw new Error("Invalid Expression");
            }

            var aNumbers = sExpression.split('+');
            var iResult = 0;

            for (var i = 0; i < aNumbers.length; i++) {
                var iNumber = aNumbers[i];
                iResult += iNumber;
            }

            return iResult;
        },
        correctlyCalculateExpression: function (sExpression) {
            sExpression = sExpression.replace(/\s+/g, '');
            if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
                throw new Error("Invalid Expression");
            }

            var aNumbers = sExpression.split('+');
            var iResult = 0;

            for (var i = 0; i < aNumbers.length; i++) {
                var iNumber = parseInt(aNumbers[i]);
                iResult += iNumber;
            }

            return iResult;
        },
    });
});
