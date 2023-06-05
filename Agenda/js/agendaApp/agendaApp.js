// hier maak ik de class 'AgendaApp' aan.
class AgendaApp {
    // in de geheugen worden deze variabelen aangemaakt.
    api;
    swticher;
    month = 0;

    // 'constructor' gaat lopen.
    constructor() {
        // er wordt een nieuwe api aangemaakt.
        this.api = new API();
        // de 'switcher' wordt aangemaakt. (daarin geven we onszelf mee)
        this.switcher = new Switcher(this);
        // uiteindelijk is de api-data terug.
        this.api.getData().then(result => {
            // endan roepen we de switcher.loadAgenda functie aan met de maand.
            this.switcher.loadAgenda(result[this.month]);
        });
    }

    // de switch functie in een arrow-functie.
    switchMonths = (sign) => {
        switch (sign) {
            // als het een '+' is.
            case "+":
                // de maand gaat met 1 omhoog.
                this.month = this.month + 1;
                break;
            // als het een '-' is.
            case "-":
                // de maand gaat met 1 omlaag.
                this.month = this.month - 1;
                break;
        }

        // als de maand identiek is aan 12.
        if (this.month === 12) {
            // dan gaat ie terug naar 0
            this.month = 0;
        }
        // als de maand kleiner is dan 0
        if (this.month < 0) {
            // dan gaat ie terug naar 11
            this.month = 11;
        }

        // hier maakt hij de agenda aan volgend de data van de 'api'.
        this.switcher.loadAgenda(this.api.dataFromAPI[this.month]);
    }
}

// hier maak ik de class 'API' aan.
class API {
    dataFromAPI = [];

    // dit voert ie in de achtergrond uit.
    async getData() {
        // hij haalt uit de map 'data', 'data.json' op. 
        await fetch("./data/data.json").then(response => {
            // daar pakt ie de echte data eruit.
            return response.json();
        }).then(data => {
            // dat stopt ie in de 'dataFromAPI'. (hij pakt alleen de maanden eruit)
            this.dataFromAPI = data.months;
        })
        // endan geeft ie het terug.
        return this.dataFromAPI;
    }
}

// hier maak ik de class 'Agenda' aan.
class Agenda {
    // in de geheugen worden deze variabelen aangemaakt.
    renderer;
    header;
    month;
    htmlElement;
    agendaApp;

    // de 'constructor' gaat lopen.
    constructor(data, agendaApp) {
        // hij slaat de 'agendaApp' op.
        this.agendaApp = agendaApp;
        // hij maakt een 'article' aan.
        this.htmlElement = document.createElement("article");
        // hij geeft het een class.
        this.htmlElement.classList.add("agenda");
        this.data = data;
        // hij maakt een nieuwe 'renderer' aan.
        this.renderer = new Renderer();
        // hier zeg je tegen de 'renderer' render de 'htmlElement' in de 'body'.
        this.renderer.render("body", this.htmlElement);
        // hier maakt ie een nieuwe 'header' aan (de 'constructor' van de 'Header' gaat lopen).
        this.header = new Header(this, data.name, this.agendaApp);
        // hier maakt ie een nieuwe 'month' aan (de 'constructor' van de 'Month' gaat lopen).
        this.month = new Month(this, data.days);
    }

    // 
    render(placeToRender, whatToRender) {
        this.renderer.render(placeToRender, whatToRender);
    }
}

// hier maak ik de class 'Header' aan.
class Header {
    // in de geheugen worden deze variabelen aangemaakt.
    nameOfMonth;
    htmlElement;
    agenda;
    leftButton;
    rightButton;

    // hier runt de constructor ( hij krijgt de 'agenda', 'nameOfMonth' en 'agendaApp' binnen ).
    constructor(agenda, nameOfMonth, agendaApp) {
        // hij slaat de 'agenda' op.
        this.agenda = agenda;
        // hij slaat de 'agendaApp' op.
        this.agendaApp = agendaApp;
        // hij slaat de 'nameOfMonth' op.
        this.nameOfMonth = nameOfMonth;
        // hij maakt de 'header' aan.
        this.htmlElement = document.createElement("header");
        // hij geeft de 'header' een class.
        this.htmlElement.classList.add("agenda__header");
        // hij maakt een 'h2' aan.
        this.text = document.createElement("h2")
        // de main rendert zich via de 'renderer'.
        this.agenda.render(".agenda", this.htmlElement);
        
        // de linker button wordt aangemaakt.
        this.leftButton = new Button("previous", "<", "agenda--left", this, this.agendaApp);
        // de button rendert zich via de 'renderer'.
        this.agenda.render(".agenda__header", this.text);
        // de rechter button wordt aangemaakt.
        this.rightButton = new Button("next", ">", "agenda--right", this, this.agendaApp);
        // de naam van de maand is de text van 'text.'
        this.text.innerText = this.nameOfMonth;
    }

    // de 'header' wordt in de 'agenda' gerenderd.
    render(placeToRender, whatToRender){
        this.agenda.render(placeToRender, whatToRender);
    }
}

// hier maak ik de class 'Button' aan.
class Button{
    // in de geheugen worden deze variabelen aangemaakt
    htmlElement;
    innerText
    extraClass;
    switcher;
    header;
    type;

    // hier runt de constructor ( hij krijgt de 'type' 'innerText' 'extraClass' 'header' en 'agendaApp' binnen ).
    constructor(type, innerText, extraClass, header, agendaApp){
        // hij slaat de 'type' op.
        this.type = type;
        // hij slaat de 'agendaApp' op.
        this.agendaApp = agendaApp;
        // hij maakt een 'button' aan.
        this.htmlElement = document.createElement("button");
        // hij geeft het een class.
        this.htmlElement.classList.add("agenda__button");
        // hij slaat de 'extraClass' op.
        this.extraClass = extraClass;
        // hij geeft het een class.
        this.htmlElement.classList.add(this.extraClass);
        // hij slaat de 'innerText' op.
        this.innerText = innerText;
        this.htmlElement.innerText = this.innerText;
        // hij slaat de 'header' op.
        this.header = header;
        this.render();

        // als de button wordt geklikt dan gaat de 'buttonClicked' functie in.
        this.htmlElement.onclick = this.buttonClicked;
    }

    // een click functie in een arrow-functie.
    buttonClicked = () => {
        // als de type identiek is aan 'previous'.
        if (this.type === "previous") {
            // gaat de 'agendaApp' achteruit.
            this.agendaApp.switchMonths("-");
            return;
        }

        // gaat de 'agendaApp' vooruit.
        this.agendaApp.switchMonths("+");
    }

    // de 'buttons' worden in de 'header' gerenderd.
    render() {
        this.header.render("header", this.htmlElement);
    }
}

// hier maak ik de class 'Switcher' aan.
class Switcher{
    // in de geheugen worden deze variabelen aangemaakt.
    agendaApp;
    agenda;
    cleaner;

    // de switcher krijgt de hele agendaApp mee.
    constructor(agendaApp) {
        // hij slaat de 'agendaApp' op.
        this.agendaApp = agendaApp;
        // hij maakt een nieuwe 'cleaner' aan.
        this.cleaner = new Cleaner();
    }

    // de loadAgenda functie is een arrow-functie.
    loadAgenda = (data) => {
        // eerst cleaned het de body.
        this.cleaner.clean("body");
        // een nieuwe agenda wordt aangemaakt met de zelfde data, en geven we de 'agendaApp' mee.
        this.agenda = new Agenda(data, this.agendaApp);
    }
}

// hier maak ik de class 'Month' aan.
class Month {
    // 
    days = [];
    // in de geheugen worden deze variabelen aangemaakt
    agenda;
    numberOfDays;
    htmlElement;

    // hier runt de constructor ( hij krijgt de 'agenda' en 'numberOfDays' binnen ).
    constructor(agenda, numberOfDays) {
        // hij maakt een 'ul' aan.
        this.htmlElement = document.createElement("ul");
        // hij geeft het een class.
        this.htmlElement.classList.add("agenda__month");
        // hij slaat de 'numberOfDays' op.
        this.numberOfDays = numberOfDays;
        // hij slaat de 'agenda' op.
        this.agenda = agenda;
        // hij rendert de hele agenda.
        this.agenda.render(".agenda", this.htmlElement);
        
        // hier maakt ie de aantal dagen aan.
        for (let i = 1; i <= numberOfDays; i++) {
            // hier maakt ie elke keer een nieuwe dag aan.
            this.days.push(new Day(this, i));
        }
    }
    
    // de hele maand wordt in de agenda gerendert.
    renderDays(placeToRender, whatToRender) {
        this.agenda.render(placeToRender, whatToRender);
    }
}

// hier maak ik de class 'Day' aan.
class Day {
    // in de geheugen worden deze variabelen aangemaakt
    month;
    htmlElement;
    dayNumber;

    // hier runt de constructor ( hij krijgt de 'month' en 'dayNumber' binnen ).
    constructor(month, dayNumber) {
        // hij slaat de 'dayNumber' op.
        this.dayNumber = dayNumber;
        // hij maakt een 'li' aan.
        this.htmlElement = document.createElement("li");
        // hij geeft het een class.
        this.htmlElement.classList.add("agenda__day");
        this.htmlElement.innerText = this.dayNumber;
        // hij slaat de 'month' op.
        this.month = month;
        // hier renderen de dagen in de maand.
        this.month.renderDays(".agenda__month", this.htmlElement);
    }
}