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
    // Jon's idea - clear al classes then display 2 default classes (favorites and container__panel) then add the color class

    // contentTarget.removeClass().addClass('favorites','container__panel')
    
    
    contentTarget.classList = []
    contentTarget.classList.add("container__panel", "favorites", color)
    // contentTarget.classList = ""
})