export const Score = score => `
    <section class="score">
        <header class="score__header">
            <h2>${score.team}</h2>
        </header>
        <p class="score__points">Score: ${score.points}</p>
        <p class="score__date">Date: ${readableDate(score.timestamp)}</p>
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
