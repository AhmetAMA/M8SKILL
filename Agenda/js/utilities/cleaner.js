// dit hele functie cleant de hele HTML.
class Cleaner{
    clean(whereToClean) {
        document.querySelector(whereToClean).innerHTML = "";
    }
}