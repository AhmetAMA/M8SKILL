// hier maak ik de class 'Header' aan.
class Header {
    // in de geheugen worden deze variabelen aangemaakt.
    htmlElement;
    view;
    headingHtmlElement;

    // de 'constructor' gaat lopen ( hij krijgt de 'view' en 'headingText' binnen ).
    constructor(view, headingText) {
        // hier maak je een 'header' aan.
        this.htmlElement = document.createElement("header");
        // hier geef je het een class.
        this.htmlElement.classList.add("view__header");

        // hier maak je een 'h1' aan.
        this.headingHtmlElement = document.createElement("h1");
        // hier zeg je dat de text van de 'headingHtmlElement' de 'headingText' is.
        this.headingHtmlElement.innerText = headingText;
        // hier geef je het een class.
        this.headingHtmlElement.classList.add("view__heading");

        // de 'headingElement' komt in de 'htmlElement'.
        this.htmlElement.appendChild(this.headingHtmlElement);
        // hier wordt de 'view' opgeslagen.
        this.view = view;
        // de 'htmlElement' wordt gerendert in de 'htmlElement' van de 'view'.
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}