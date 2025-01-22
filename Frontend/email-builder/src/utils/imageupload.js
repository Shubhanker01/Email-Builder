import axios from "axios";

async function imageUpload(formData, filename) {
    try {
        let response = await axios.post('http://localhost:3000/api/v1/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'blob'
        })
        let data = await response.data
        let url = URL.createObjectURL(data)
        url = url.replace(url, `http://localhost:3000/api/v1/sendImage/${filename}`)
        console.log(url)
        return url

    }
    catch (err) {
        console.log(err)
    }
}

export default imageUpload