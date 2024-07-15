const morseCodeMap = {
    'A': '·−', 'B': '−···', 'C': '−·−·', 'D': '−··', 'E': '·', 'F': '··−·', 'G': '−−·',
    'H': '····', 'I': '··', 'J': '·−−−', 'K': '−·−', 'L': '·−··', 'M': '−−', 'N': '−·',
    'O': '−−−', 'P': '·−−·', 'Q': '−−·−', 'R': '·−·', 'S': '···', 'T': '−', 'U': '··−',
    'V': '···−', 'W': '·−−', 'X': '−··−', 'Y': '−·−−', 'Z': '−−··',
    '0': '−−−−−', '1': '·−−−−', '2': '··−−−', '3': '···−−', '4': '····−', '5': '·····',
    '6': '−····', '7': '−−···', '8': '−−−··', '9': '−−−−·', ' ': ' '
};

function convertToMorse() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let morseOutput = '';
    for (let char of inputText) {
        if (morseCodeMap[char]) {
            morseOutput += morseCodeMap[char] + ' ';
        } else {
            morseOutput += ' ';
        }
    }
    document.getElementById('morseOutput').innerText = morseOutput.trim();
}
