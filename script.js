let fields = [
    'circle', 
    'circle', 
    'circle', 
    null, 
    'cross', 
    null, 
    'cross', 
    null, 
    null
];

function init() {
    render();
}

function render() {
    // Referenz auf den Container
    const gameContent = document.getElementById('game-content');

    // HTML-Tabelle erzeugen
    let tableHTML = '<table>';

    // Durch die Felder iterieren und die Tabelle Zeile für Zeile aufbauen
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>'; // Start einer neuen Zeile
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j; // Index im fields-Array
            let cellContent = ''; // Standard ist eine leere Zelle

            if (fields[index] === 'circle') {
                cellContent = generateCircleSVG(); // Kreis
            } else if (fields[index] === 'cross') {
                cellContent = generateCrossSVG(); // Kreuz
            }

            tableHTML += `<td>${cellContent}</td>`; // Zelleninhalt hinzufügen
        }
        tableHTML += '</tr>'; // Zeile beenden
    }

    tableHTML += '</table>'; // Tabelle abschließen

    // Tabelle in den Container einfügen
    gameContent.innerHTML = tableHTML;
}

function generateCircleSVG() {
    const svgHTML = `
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <circle 
                cx="35" 
                cy="35" 
                r="30" 
                fill="none" 
                stroke="#00B0EF" 
                stroke-width="10" 
                stroke-dasharray="188.4" 
                stroke-dashoffset="188.4">
                <animate 
                    attributeName="stroke-dashoffset" 
                    from="188.4" 
                    to="0" 
                    dur="250ms" 
                    repeatCount="1" 
                    fill="freeze" />
            </circle>
        </svg>
    `;
    return svgHTML;
}

function generateCrossSVG() {
    const svgHTML = `
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <!-- Erste Linie: Oben-Links nach Unten-Rechts -->
            <line 
                x1="10" 
                y1="10" 
                x2="60" 
                y2="60" 
                stroke="rgb(254,190,0)" 
                stroke-width="10" 
                stroke-dasharray="70.71" 
                stroke-dashoffset="70.71">
                <animate 
                    attributeName="stroke-dashoffset" 
                    from="70.71" 
                    to="0" 
                    dur="125ms" 
                    begin="0s" 
                    fill="freeze" />
            </line>
            
            <!-- Zweite Linie: Oben-Rechts nach Unten-Links -->
            <line 
                x1="60" 
                y1="10" 
                x2="10" 
                y2="60" 
                stroke="rgb(254,190,0)" 
                stroke-width="10" 
                stroke-dasharray="70.71" 
                stroke-dashoffset="70.71">
                <animate 
                    attributeName="stroke-dashoffset" 
                    from="70.71" 
                    to="0" 
                    dur="125ms" 
                    begin="125ms" 
                    fill="freeze" />
            </line>
        </svg>
    `;
    return svgHTML;
}