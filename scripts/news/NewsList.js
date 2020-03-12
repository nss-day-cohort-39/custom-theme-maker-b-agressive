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

    contentTarget.classList.add(color)
     
})