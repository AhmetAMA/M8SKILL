// dit hele functie kan alles renderen waar ie het maar wilt.
class Renderer {
    render(placeToRender, whatToRender) {
        document.querySelector(placeToRender).appendChild(whatToRender);
    }
}