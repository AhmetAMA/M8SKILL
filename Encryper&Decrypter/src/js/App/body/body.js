// hier maak ik de class 'Body' aan.
class Body {
    // in de geheugen worden deze variabelen aangemaakt.
    htmlElement;
    view;
    inputHtmlElement;
    text;

    // de 'constructor' gaat lopen ( hij krijgt de 'view' en 'object' binnen ).
    constructor(view, object) {
        // hier maak je een 'section' aan.
        this.htmlElement = document.createElement("section");
        // hier geef je het een class.
        this.htmlElement.classList.add("view__body");

        // hier maak je een 'textarea' aan.
        this.inputHtmlElement = document.createElement("textarea");
        // hier geef je het een class.
        this.inputHtmlElement.classList.add("view__input");

        // de 'inputHtmlElement' komt in de 'htmlElement'.
        this.htmlElement.appendChild(this.inputHtmlElement);
        // de 'placeholder' van de 'inputHtmlElement' krijgt de waarde van 'object.placeholder'.
        this.inputHtmlElement.placeholder = object.placeholder;
        // de 'value' van de 'inputHtmlElement' krijgt de waarde van 'object.value'.
        this.inputHtmlElement.value = object.value;
        // de 'text' krijgt de waarde van 'object.value'.
        this.text = object.value;
        // elke keer dat er in de 'inputHtmlElment' wordt getypt moet ie de 'typed' functie uitvoeren.
        this.inputHtmlElement.oninput = this.typed;

        // hier wordt de 'view' opgeslagen.
        this.view = view;
        // de 'htmlElement' wordt gerendert in de 'htmlElement' van de 'view'.
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    // hier maak ik een arrow functie die 'typed' heet en die een 'event' meekrijgt.
    typed = (event) => {
        // de 'text' krijgt de reactie van de 'target.value'.
        this.text = event.target.value;
    }

    // hier maak je een functie aan die 'changeBody' heet en het krijgt 'newText' mee.
    changeBody(newText) {
        // hier wordt de 'value' van de 'inputHtmlElement' de 'newtext'.
        this.inputHtmlElement.value = newText;
    }
}