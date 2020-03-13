export const FavoriteItem = favorite => `
    <section class="favoriteItem">
        <header class="favoriteItem_header">
            <h2>${favorite.title}</h2>
        </header>
        <p>
            <img class="favoriteItem_image" src="${favorite.url}" />
        </p>
        <p class="favoriteItem_date">Date: ${readableDate(favorite.timestamp)}</p>
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

