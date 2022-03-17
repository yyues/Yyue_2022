export function updateTheme(theme){
    const LINK_ID ='themelink'
    let link = document.getElementById(LINK_ID)
    const update = (name) => {
        const href = `./css/${name}.css`

        if (!link) {
            link = document.createElement("link")

            link.rel = "stylesheet"
            link.href = href
            link.id = LINK_ID

            document.head.appendChild(link)
        } else {
            link.href = href
        }
    }

    switch (theme) {
        case 2:
            update("dark")
            break
        case 3:
            update("blue")
            break
        case 4:
            update("green")
            break;
        default:
            if (link) {
                document.head.removeChild(link)
            }
    }
}