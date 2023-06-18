// hier maak ik de class 'Decrypter' aan.
class Decrypter{    
    // een functie die 'decrypt' heet en 'stringToDecrypt' binnen krijgt.
    decrypt(stringToDecrypt) {
        // zet de inhoud van de string 'stringToDecrypt' om naar hoofdletters.
        stringToDecrypt = stringToDecrypt.toUpperCase();
        // een nieuwe variabele genaamd 'decryptedString' wordt aangemaakt die leeg is.
        let decryptedString = [];

        // een for loop
        for (let i = 0; i < stringToDecrypt.length; i++){
            // een switch statement die de waarde van 'i' controleert binnen het string 'stringToDecrypt'.
            switch (stringToDecrypt[i]) {
                // controleert of de waarde het letter binnen de aanhalingstekens is.
                case "D":
                    // de letter binnen de aanhalingstekens wordt toegevoegd aan de 'decryptedString'.
                    decryptedString.push("A");
                    // de uitvoering wordt beëindigd.
                    break;
                // de 'cases' hieronder is het zelfde als de 'case' hierboven, maar dan alleen een ander letter.
                case "E":
                    decryptedString.push("B");
                    break;
                case "F":
                    decryptedString.push("C");
                    break;
                case "G":
                    decryptedString.push("D");
                    break;
                case "H":
                    decryptedString.push("E");
                    break;
                case "I":
                    decryptedString.push("F");
                    break;
                case "J":
                    decryptedString.push("G");
                    break;
                case "K":
                    decryptedString.push("H");
                    break;
                case "L":
                    decryptedString.push("I");
                    break;
                case "M":
                    decryptedString.push("J");
                    break;
                case "N":
                    decryptedString.push("K");
                    break;
                case "O":
                    decryptedString.push("L");
                    break;
                case "P":
                    decryptedString.push("M");
                    break;
                case "Q":
                    decryptedString.push("N");
                    break;
                case "R":
                    decryptedString.push("O");
                    break;
                case "S":
                    decryptedString.push("P");
                    break;
                case "T":
                    decryptedString.push("Q");
                    break;
                case "U":
                    decryptedString.push("R");
                    break;
                case "V":
                    decryptedString.push("S");
                    break;
                case "W":
                    decryptedString.push("T");
                    break;
                case "X":
                    decryptedString.push("U");
                    break;
                case "Y":
                    decryptedString.push("V");
                    break;
                case "Z":
                    decryptedString.push("W");
                    break;
                case "A":
                    decryptedString.push("X");
                    break;
                case "B":
                    decryptedString.push("Y");
                    break;
                case "C":
                    decryptedString.push("Z");
                    break;
                // dit 'statement' wordt uitgevoerd wanneer geen enkele 'case' overeenkomt met de waarde van de string.
                default:
                    // de waarde van 'i' in de 'stringToDecrypt' die niet overeenkomt met de voorafgaande cases wordt
                    // toegevoegd aan de 'decryptedString'.
                    decryptedString.push(stringToDecrypt[i]);
                    // de uitvoering wordt beëindigd.
                    break;
            }
        }
        // alle elementen van de array wordt samengevoegd tot een enkele string.
        decryptedString = decryptedString.join("");
        // de waarde van 'decryptedString' wordt geretourneerd.
        return decryptedString;
    }
}