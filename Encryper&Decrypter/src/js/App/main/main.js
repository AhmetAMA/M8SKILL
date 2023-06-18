// hier maak ik de class 'Main' aan.
class Main {
    // in de geheugen worden deze variabelen aangemaakt.
    encrypterView;
    decrypterView;
    htmlElement;
    app;

    // de 'constructor' gaat lopen ( hij krijgt de 'data' en 'app' binnen ).
    constructor(data, app) {
        // hier wordt de 'app' opgeslagen.
        this.app = app;

        // hier maak je een 'main' aan.
        this.htmlElement = document.createElement("main");
        // hier geef je het een class.
        this.htmlElement.classList.add("main");
        // de 'htmlElement' wordt gerendert in de 'body'.
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        // de 'encrypterView' wordt opgeslagen in de 'EncrypterView' en die krijgt zijn 'main' en de 'ecrypt' van de data.
        this.encrypterView = new EncrypterView(this, data.encrypt);
        // de 'decrypterView' wordt opgeslagen in de 'DecrypterView' en die krijgt zijn 'main' en de 'decrypt' van de data.
        this.decrypterView = new DecrypterView(this, data.decrypt);
    }

    // hier maak je een functie aan die 'cipher' heet en het krijgt 'textToCipher' en 'type' mee.
    cipher(textToCipher, type) {
        // als de 'type' identiek is aan "ENCRYPT".
        if (type === "ENCRYPT") {
            // dan voert hij de 'encrypt' functie uit van de 'app' en die wordt in de 'textToCipher' opgeslagen.
            this.app.encrypt(textToCipher);
        }
        // en anders
        else {
            // voert hij de 'decrypt' functie uit van de 'app' en die wordt in de 'textToCipher' opgeslagen.
            this.app.decrypt(textToCipher);
        }
    }
    
    // hier maak je een functie aan die 'changeEncrypter' heet en het krijgt 'encryptedText' mee.
    changeEncrypter(encryptedText) {
        // hier stuurt hij de 'encryptedText' naar de 'changeBody' functie in de 'encrypterView'.
        this.encrypterView.changeBody(encryptedText);
    }
    
    // hier maak je een functie aan die 'changeDecrypter' heet en het krijgt 'decryptedText' mee.
    changeDecrypter(decryptedText) {
        // hier stuurt hij de 'decryptedText' naar de 'changeBody' functie in de 'decrypterView'.
        this.decrypterView.changeBody(decryptedText);
    }
}