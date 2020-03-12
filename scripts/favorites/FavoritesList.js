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

    //when color chosen add a color class to
    
        




        //     export const FavoritesList = () => {
        //         const favoriteItems = useFavorites()
        //         return render(favoriteItems)
        // }
    
        // eventHub.classList = []
        // eventHub.classList.add(color)
     
})