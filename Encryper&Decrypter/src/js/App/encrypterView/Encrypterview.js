// hier maak ik de class 'EncrypterView' aan.
class EncrypterView {
    // in de geheugen worden deze variabelen aangemaakt.
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    // de 'constructor' gaat lopen ( hij krijgt de 'main' en 'object' binnen ).
    constructor(main, object) {
        // hier maak je een 'article' aan.
        this.htmlElement = document.createElement("article");
        // hier geef je het een class.
        this.htmlElement.classList.add("view");
        
        // hier wordt de 'main' opgeslagen.
        this.main = main;
        // hier geef je de 'type' de waarde "ENCYRPT".
        this.type = "ENCRYPT";
        
        // de 'htmlElement' wordt gerendert in de 'htmlElement' van de 'main'.
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        // de 'Header' wordt opgeslagen in de 'header' en hij krijgt zichzelf en de object 'Encrypter' mee.
        this.header = new Header(this, "Encrypter");
        // de 'Body' wordt opgeslagen in de 'body' en hij krijgt zichzelf en de 'placeholder' mee.
        this.body = new Body(this, object);
        // de 'Footer' wordt opgeslagen in de 'footer' en hij krijgt zichzelf en de object 'Encrypt' mee.
        this.footer = new Footer(this, "Encrypt");
    }

    // hier maak je een functie aan die 'getDataFromBody' heet.
    getDataFromBody() {
        // hier roep je de 'cipher' functie van de 'main' en de 'text' uit de 'body' van zichzelf, en de type van zichzelf.
        this.main.cipher(this.body.text, this.type);
    }

    // hier maak je een functie aan die 'changeBody' heet en het krijgt 'encryptedText' mee.
    changeBody(encryptedText) {
        // hier stuurt hij de 'encryptedText' naar de 'changeBody' functie in de 'body'.
        this.body.changeBody(encryptedText);
    }
}