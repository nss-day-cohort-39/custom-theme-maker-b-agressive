export const NewsItem = news => `
    <section class="newsItem">
        <header class="newsItem_header">
            <h2>${news.title}</h2>
        </header>
        <p class="newsItem_mood">Mood: ${news.mood}</p>
        <p class="newsItem_date">Date: ${readableDate(news.timestamp)}</p>
    </section>
`

const readableDate = (timestamp) => {

    const coolDate = new Date(timestamp).toLocaleDateString('en-US')
    const splitDate = coolDate.split("/")
    const fixedYear = splitDate[2].split("")
    const finalData = fixedYear.slice(2)
    const joinedYear = finalData.join("")
    return `${joinedYear}/${splitDate[0]}/${splitDate[1]}`

}