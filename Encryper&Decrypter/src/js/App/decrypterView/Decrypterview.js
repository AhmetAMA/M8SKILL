// hier maak ik de class 'DecrypterView' aan.
class DecrypterView {
    // in de geheugen worden deze variabelen aangemaakt.
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    // de 'constructor' gaat lopen ( hij krijgt de 'main' en 'placeholder' binnen ).
    constructor(main, placeholder) {
        // hier maak je een 'article' aan.
        this.htmlElement = document.createElement("article");
        // hier geef je het een class.
        this.htmlElement.classList.add("view");
        
        // hier geef je de 'type' de waarde "DECRYPT".
        this.type = "DECRYPT";
        // hier wordt de 'view' opgeslagen.
        this.main = main;
        
        // de 'htmlElement' wordt gerendert in de 'htmlElement' van de 'main'.
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        // de 'Header' wordt opgeslagen in de 'Header' en hij krijgt zichzelf en de object 'Decrypter' mee.
        this.header = new Header(this, "Decrypter");
        // de 'Body' wordt opgeslagen in de 'body' en hij krijgt zichzelf en de 'placeholder' mee.
        this.body = new Body(this, placeholder);
        // de 'Footer' wordt opgeslagen in de 'footer' en hij krijgt zichzelf en de object 'Decrypt' mee.
        this.footer = new Footer(this, "Decyrpt");
    }

    // hier maak je een functie aan die 'getDataFromBody' heet.
    getDataFromBody() {
        // hier roep je de 'cipher' functie van de 'main' en de 'text' uit de 'body' van zichzelf, en de type van zichzelf.
        this.main.cipher(this.body.text, this.type);
    }

    // hier maak je een functie aan die 'changeBody' heet en het krijgt 'decryptedText' mee.
    changeBody(decryptedText) {
        // hier stuurt hij de 'decryptedText' naar de 'changeBody' functie in de 'body'.
        this.body.changeBody(decryptedText);
    }
}