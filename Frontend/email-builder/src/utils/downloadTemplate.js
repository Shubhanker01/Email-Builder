import axios from "axios";

async function downloadTemplate() {
    let response = await axios.get('https://email-builder-backend-oam4.onrender.com/api/v1/download', {
        responseType: 'blob'
    })
    return response.data
}

export { downloadTemplate }