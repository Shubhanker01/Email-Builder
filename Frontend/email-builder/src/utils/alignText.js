const alignContent = (e) => {
    document.getElementById('content').style.textAlign = e.target.value
}

const alignHeading = (e) => {
    document.getElementById('heading').style.textAlign = e.target.value
}

export { alignContent, alignHeading }
