Dieses Projekt Zeigt, dass eine JavaScript-OpenUI5-Anwendung mithilfe von JSDoc nicht sinnvoll um ein Typsystem erweitert werden kann. Um die Anwendung auszuführen werden zunächst verschiedene Abhängigkeiten benötigt. Um diese herunterzuladen muss npm via Node.js installiert werden. Anschließend können die Abhängigkeiten mittels ```npm i``` im Terminal installiert werden.

Um die Anwendung zu starten, kann nun ```npm start``` genutzt werden. Die Anwendung kann dann unter der URL ```http://localhost:8080/index.html``` aufgerufen werden. Sollten mehrere Instanzen von OpenUI5 gleichzeitig laufen, kann der Port abweichen. Der Korrekte Port wird immer in dem Terminal angezeigt.

Um eine Typenprüfung manuell durchzuführen kann der Befehl ```npx tsc``` genutzt werden.

Im Ordner "ECMAScript 6" sind einige Beispieldateien zu finden, die zwar alle Typen annotieren, jedoch wegen invalider Syntax zu einer nicht ausführbaren Webapp führen. Details hierzu sind in dem Kapitel "Technologievergleich" der Bachelorarbeit zu finden.