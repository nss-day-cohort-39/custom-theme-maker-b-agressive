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

    contentTarget.classList = []
    contentTarget.classList.add("container__panel", "news", "scores", color)
})

eventHub.addEventListener("fontChosen", event => {
    const font = event.detail.font

    const contentTarget = document.querySelector(".news")
    
    
    contentTarget.classList = []
    contentTarget.classList.add("container__panel", "news", "scores", font)
})

eventHub.addEventListener("borderChosen", event => {
    const border = event.detail.border

    const contentTarget = document.querySelector(".news")
    
    
    contentTarget.classList = []
    contentTarget.classList.add("container__panel", "news", "scores", border)
})