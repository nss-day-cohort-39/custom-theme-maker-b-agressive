import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = newsCollection => {
    return `
        <article class="container__panel scores news">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}


const eventHub = document.querySelector("#container")

 

eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    const contentTarget = document.querySelector(".news")

    contentTarget.classList.remove("red", "purple", "green", "blue")
    contentTarget.classList.add(color)
})

eventHub.addEventListener("fontChosen", event => {
    const font = event.detail.font

    const contentTarget = document.querySelector(".news")
    
    
    contentTarget.classList.remove("xsmall", "small", "large", "xlarge")
    contentTarget.classList.add(font)
})

eventHub.addEventListener("borderChosen", event => {
    const border = event.detail.border

    const contentTarget = document.querySelector(".news")
    
    
    contentTarget.classList.remove("onepixel", "threepixels", "fivepixels")
    contentTarget.classList.add(border)
})

eventHub.addEventListener("visibilityToggled", e => {
    if (e.detail.chosenComponent === "news") {
        childrenVisible = !childrenVisible

        const allFavoriteItems = document.querySelectorAll(".favoriteItem")

        allFavoriteItems.forEach(item => childrenVisible
            ? item.classList.remove("invisible")
            : item.classList.add("invisible")
        )
    }
})