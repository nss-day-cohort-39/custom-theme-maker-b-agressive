import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"

export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}

let render = favoriteCollection => {
    return `
        <article class="container__panel favorites">
            ${favoriteCollection.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}



const eventHub = document.querySelector("#container")



eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    const contentTarget = document.querySelector(".favorites")
    contentTarget.classList.remove("red", "purple", "green", "blue")
    contentTarget.classList.add(color)

})

eventHub.addEventListener("fontChosen", event => {
    const font = event.detail.font

    const contentTarget = document.querySelector(".favorites")

    contentTarget.classList.remove("xsmall", "small", "large", "xlarge")
    contentTarget.classList.add(font)
})

eventHub.addEventListener("borderChosen", event => {
    const border = event.detail.border

    const contentTarget = document.querySelector(".favorites")

    contentTarget.classList.remove("onepixel", "threepixels", "fivepixels")
    contentTarget.classList.add(border)
})

eventHub.addEventListener("toggleChosen", event => {
    const toggle = event.detail.toggle
    const favoriteItems = useFavorites()
    if (toggle === "favorites") {

        const contentTarget = document.querySelector(".favorites")
        if (contentTarget.innerHTML === "") {
            contentTarget.innerHTML = `
            ${favoriteItems.map(favorite => FavoriteItem(favorite)).join("")}
            `
        } else {
            contentTarget.innerHTML = ""
        }
    }
})