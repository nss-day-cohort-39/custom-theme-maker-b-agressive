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

eventHub.addEventListener("toggleChosen", event => {
    const toggle = event.detail.toggle
    const newsItems = useNews()
    if (toggle === "news") {

        const contentTarget = document.querySelector(".news")
        if (contentTarget.innerHTML === "") {
            contentTarget.innerHTML = `
            ${newsItems.map(news => NewsItem(news)).join("")}
            `
        } else {
            contentTarget.innerHTML = ""
        }
    }
})