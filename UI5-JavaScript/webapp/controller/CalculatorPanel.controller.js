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
                // Evaluate the expression
                const iIncorrectResult = this.incorrectlyCalculateExpression(sExpression);
                const iCorrectResult = this.correctlyCalculateExpression(sExpression);

                // Update the text
                oIncorrectResultText.setHtmlText("Incorrect Answer: " + iIncorrectResult.toString());
                oCorrectResultText.setHtmlText("Correct Answer: " + iCorrectResult.toString());
            } catch (e) {
                // If the expression is not valid, display an error message
                oIncorrectResultText.setHtmlText("Incorrect Answer: Invalid Expression");
                oCorrectResultText.setHtmlText("Correct Answer: Invalid Expression");
            }
        },

        incorrectlyCalculateExpression: function (sExpression) {
            // Remove spaces
            sExpression = sExpression.replace(/\s+/g, '');

            // Check if the Expression is valid
            if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
                throw new Error("Invalid Expression");
            }

            // Split the expression by '+'
            var aNumbers = sExpression.split('+');

            // Initialize the result
            var iResult = 0;

            // Iterate over the numbers
            for (var i = 0; i < aNumbers.length; i++) {

                var iNumber = aNumbers[i];

                // Add the number to the result
                iResult += iNumber;
            }

            // Return the result
            return iResult;
        },
        correctlyCalculateExpression: function (sExpression) {
            // Remove spaces
            sExpression = sExpression.replace(/\s+/g, '');

            // Check if the Expression is valid
            if (!/^(\d+([\d+]\d+)+)$/.test(sExpression)) {
                throw new Error("Invalid Expression");
            }

            // Split the expression by '+'
            var aNumbers = sExpression.split('+');

            // Initialize the result
            var iResult = 0;

            // Iterate over the numbers
            for (var i = 0; i < aNumbers.length; i++) {

                var iNumber = parseInt(aNumbers[i]);

                // Add the number to the result
                iResult += iNumber;
            }

            // Return the result
            return iResult;
        },
    });
});
