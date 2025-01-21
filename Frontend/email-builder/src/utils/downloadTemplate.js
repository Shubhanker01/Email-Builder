import axios from "axios";

async function downloadTemplate() {
    let response = await axios.get('http://localhost:3000/api/v1/download', {
        responseType: 'blob'
    })
    return response.data
}

export { downloadTemplate }