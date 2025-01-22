const changeContentFont = (e) => {
    document.getElementById('content').style.fontFamily = e.target.value
}

const changeHeadingFont = (e) => {
    document.getElementById('heading').style.fontFamily = e.target.value
}
export { changeContentFont, changeHeadingFont }