// hier maak ik de class 'Encrypter' aan.
class Encrypter{
    // een functie die 'encrypt' heet en 'stringToEncrypt' binnen krijgt.
    encrypt(stringToEncrypt) {
        // zet de inhoud van de string 'stringToEncrypt' om naar hoofdletters.
        stringToEncrypt = stringToEncrypt.toUpperCase();
        // een nieuwe variabele genaamd 'EncryptedString' wordt aangemaakt die leeg is.
        let encryptedString = [];
        
        // een for loop
        for (let i = 0; i < stringToEncrypt.length; i++){
            // een switch statement die de waarde van 'i' controleert binnen het string 'stringToEncrypt'.
            switch (stringToEncrypt[i]) {
                // controleert of de waarde het letter binnen de aanhalingstekens is.
                case "A":
                    // de letter binnen de aanhalingstekens wordt toegevoegd aan de 'encryptedString'.
                    encryptedString.push("D");
                    // de uitvoering wordt beëindigd.
                    break;
                // de 'cases' hieronder is het zelfde als de 'case' hierboven, maar dan alleen een ander letter.
                case "B":
                    encryptedString.push("E");
                    break;
                case "C":
                    encryptedString.push("F");
                    break;
                case "D":
                    encryptedString.push("G");
                    break;
                case "E":
                    encryptedString.push("H");
                    break;
                case "F":
                    encryptedString.push("I");
                    break;
                case "G":
                    encryptedString.push("J");
                    break;
                case "H":
                    encryptedString.push("K");
                    break;
                case "I":
                    encryptedString.push("L");
                    break;
                case "J":
                    encryptedString.push("M");
                    break;
                case "K":
                    encryptedString.push("N");
                    break;
                case "L":
                    encryptedString.push("O");
                    break;
                case "M":
                    encryptedString.push("P");
                    break;
                case "N":
                    encryptedString.push("Q");
                    break;
                case "O":
                    encryptedString.push("R");
                    break;
                case "P":
                    encryptedString.push("S");
                    break;
                case "Q":
                    encryptedString.push("T");
                    break;
                case "R":
                    encryptedString.push("U");
                    break;
                case "S":
                    encryptedString.push("V");
                    break;
                case "T":
                    encryptedString.push("W");
                    break;
                case "U":
                    encryptedString.push("X");
                    break;
                case "V":
                    encryptedString.push("Y");
                    break;
                case "W":
                    encryptedString.push("Z");
                    break;
                case "X":
                    encryptedString.push("A");
                    break;
                case "Y":
                    encryptedString.push("B");
                    break;
                case "Z":
                    encryptedString.push("C");
                    break;
                // dit 'statement' wordt uitgevoerd wanneer geen enkele 'case' overeenkomt met de waarde van de string.
                default:
                    // de waarde van 'i' in de 'stringToEncrypt' die niet overeenkomt met de voorafgaande cases wordt
                    // toegevoegd aan de 'encryptedString'.
                    encryptedString.push(stringToEncrypt[i]);
                    // de uitvoering wordt beëindigd.
                    break;
            }
        }
        // alle elementen van de array wordt samengevoegd tot een enkele string.
        encryptedString = encryptedString.join("");
        // de waarde van 'encryptedString' wordt geretourneerd.
        return encryptedString;
    }
}