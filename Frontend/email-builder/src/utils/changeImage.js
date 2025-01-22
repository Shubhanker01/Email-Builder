const imageChange = (e) => {
    const imgHandle = document.getElementById('image').files
    const [file] = imgHandle
    if (file) {
        document.getElementById('img').src = URL.createObjectURL(file)
    }
}

export default imageChange