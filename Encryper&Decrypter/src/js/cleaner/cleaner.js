// dit hele functie cleant de hele HTML.
class Cleaner{
    clean(whatToClean) {
        document.querySelector(whatToClean).innerHTML = "";
    }
}