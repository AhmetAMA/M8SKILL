// hier maak ik de class 'Footer' aan.
class Footer {
    // in de geheugen worden deze variabelen aangemaakt.
    htmlElement;
    view;
    buttonHtmlElement;
    app;

    // de 'constructor' gaat lopen ( hij krijgt de 'view' en 'buttonText' binnen ).
    constructor(view, buttonText) {
        // hier maak je een 'footer' aan.
        this.htmlElement = document.createElement("footer");
        // hier geef je het een class.
        this.htmlElement.classList.add("view__footer");
        
        // hier maak je een 'button' aan.
        this.buttonHtmlElement = document.createElement("button");
        // hier geef je het een class.
        this.buttonHtmlElement.classList.add("view__button");
        // 
        this.buttonHtmlElement.onclick = this.buttonClicked;
        // hier zeg je dat de text van de 'buttonHtmlElement' de 'buttonText' is.
        this.buttonHtmlElement.innerText = buttonText;
        
        // de 'buttonHtmlElement' komt in de 'htmlElement'.
        this.htmlElement.appendChild(this.buttonHtmlElement);
        // hier wordt de 'view' opgeslagen.
        this.view = view;
        // de 'htmlElement' wordt gerendert in de 'htmlElement' van de 'view'.
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
    
    // als de 'button' geklikt is wordt de 'getDataFromBody' in de 'view' functie uitgevoerd.
    buttonClicked = () => {
        this.view.getDataFromBody();
    }
}