const changeTitleSize = (e) => {
    document.getElementById('heading').style.fontSize = `${e.target.value}px`
}
const changeContentSize = (e) => {
    document.getElementById('content').style.fontSize = `${e.target.value}px`
}

export { changeTitleSize, changeContentSize }