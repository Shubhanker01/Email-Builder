// change content color
const changeContentColor = (e) => {
    document.getElementById('content').style.color = e.target.value
}

// change title color
const changeTitleColor = (e) => {
    document.getElementById('heading').style.color = e.target.value
}

// change background color
const changeBgColor = (e) => {
    document.getElementById('body').style.backgroundColor = e.target.value
}

export { changeContentColor, changeTitleColor, changeBgColor }