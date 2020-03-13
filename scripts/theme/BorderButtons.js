export const BorderButtons = () => {
    return `
        <article class="borderSizes">
            <fieldset>
                <legend>Border Sizes</legend>

                <label for="onepixel">1px</label>
                <input id="border--onepixel" type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input id="border--threepixels" type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input id="border--fivepixels" type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}
const eventHub = document.querySelector("#container")

eventHub.addEventListener("change", changeEvent => {

    // Make sure it was one of the color buttons
    if (changeEvent.target.id.startsWith("border--")) {

        // Get the chosen color
        const [prefix, chosenBorder] = changeEvent.target.id.split("--")
        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */
        // const chosenBorder = changeEvent.target.value 
        const borderChosenEvent = new CustomEvent("borderChosen", {
            detail: {
                border: chosenBorder
            }
        })

        eventHub.dispatchEvent(borderChosenEvent)
    }
})