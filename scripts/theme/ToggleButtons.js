export const ToggleButtons = () => {
    return `
        <article class="toggles">
            <fieldset>
                <legend>Toggles</legend>
                <button id="btnToggle--scores">Toggle Scores</button>
                <button id="btnToggle--news">Toggle News</button>
                <button id="btnToggle--favorites">Toggle Favorites</button>
            </fieldset>
        </article>
    `
}
const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the color buttons
    if (clickEvent.target.id.startsWith("btnToggle--")) {

        // Get the chosen color
        const [prefix, chosenToggle] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */
        const toggleChosenEvent = new CustomEvent("toggleChosen", {
            detail: {
                toggle: chosenToggle
            }
        })

        eventHub.dispatchEvent(toggleChosenEvent)
    }
})