Dieses Projekt Zeigt, wie eine JavaScript-OpenUI5-Anwendung auf TypeScript migriert werden kann. Um die Anwendung auszuführen werden zunächst verschiedene Abhängigkeiten benötigt. Um diese herunterzuladen muss npm via Node.js installiert werden. Anschließend können die Abhängigkeiten mittels ```npm i``` im Terminal installiert werden.

Um die Anwendung zu starten, kann nun ```npm start``` genutzt werden. Die Anwendung kann dann unter der URL ```http://localhost:8080/index.html``` aufgerufen werden. Sollten mehrere Instanzen von OpenUI5 gleichzeitig laufen, kann der Port abweichen. Der Korrekte Port wird immer in dem Terminal angezeigt.

Um den TypeScript-Code manuell zu kompillieren kann der Befehl ```npm run build``` genutzt werden.

Um den TypeScript-Code global auf Typkonflikte zu prüfen, kann der Befehl ```npx tsc``` genutzt werden.

Um das Projekt in TypeScript zu debuggen, wird Google Chrome benötigt. Hierzu sollte dieses Projekt in VSCode direkt geöffnet sein (und nicht das Root-Repo). Nachdem der Development-Server durch ein ```npm i``` gestartet wurde, kann die Launch-Konfiguration "Launch Chrome against localhost" gestartet werden. Nun öffnet sich ein Chrome-Fenster. Alle in VSCode gesetzten Breakpoints gelten für dieses Fenster. 