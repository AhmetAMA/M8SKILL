// hier maak ik de class 'App' aan.
class App {
    // in de geheugen worden deze variabelen aangemaakt.
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    // de 'constructor' gaat lopen.
    constructor() {
        // de 'Encrypter' wordt opgeslagen in de 'encrypter'.
        this.encrypter = new Encrypter();
        // de 'Decrypter' wordt opgeslagen in de 'decrypter'.
        this.decrypter = new Decrypter();
        // de 'Cleaner' wordt opgeslagen in de 'cleaner'.
        this.cleaner = new Cleaner();
        // de 'Renderer' wordt opgeslagen in de 'renderer'.
        this.renderer = new Renderer();
        // de 'API' wordt opgeslagen in de 'api'.
        this.api = new API();
        // de 'data' die we gaan ophalen slaan we op in de 'getData' functie ( waar we de 'data.json' link hebben
        // gegeven ) van de 'api' classe / variabel.
        this.api.getData("/src/data/data.json").then((data) => {
            // de 'Main' wordt opgeslagen in de 'main' ( hij krijgt de 'data' en de zichzelf mee ).
            this.main = new Main(data, this);
        });
    }
    
    // hier maak je een functie aan die 'encrypt' heet en het krijgt 'TextToEncrypt' mee.
    encrypt(TextToEncrypt) {
        // hier maak je een variabel aan die 'encrypted' heet en die krijgt de 'TextToEncrypt'
        const encrypted = this.encrypter.encrypt(TextToEncrypt);
        // 
        this.main.changeEncrypter(encrypted);
    }

    // hier maak je een functie aan die 'decrypt' heet en het krijgt 'TextToDecrypt' mee.
    decrypt(TextToDecrypt) {
        // 
        const decrypted = this.decrypter.decrypt(TextToDecrypt);
        // 
        this.main.changeDecrypter(decrypted);
    }
}


//De encrypt functie neemt een tekst TextToEncrypt  
//en versleutelt deze met behulp van een encryptie algoritme dat staat bij this.encrypter. 
//Uitkomst wordt opgeslagen in een variabele genaamd "encrypted".