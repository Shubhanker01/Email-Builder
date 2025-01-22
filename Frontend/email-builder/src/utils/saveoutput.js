import axios from "axios";

export default async function saveoutput(content) {
    let response = await axios.post('https://email-builder-backend-oam4.onrender.com/api/v1/saveTemplate', content, {
        headers: {
            'Content-Type': 'text/plain'
        }
    })
    let data = await response.data
    return data
}