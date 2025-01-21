const fs = require('fs')
const path = require('path')

function generateOutput(html) {
    var htmlContent = `
<!DOCTYPE html>
<html lang="en">
    
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Output</title>
</head>
    
    <body>
        <div id="output">
            ${html}
        </div>
    </body>
    
    
    </html>
    
    `
    fs.writeFile(path.join(__dirname, '../Layouts/output.html'), htmlContent, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('file created')
        }

    })
}

module.exports = generateOutput
