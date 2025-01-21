const fs = require('fs')

var htmlContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Output</title>
</head>

<body>
    <div id="output">

    </div>
</body>


</html>

`

fs.writeFile('../assets/output.html', htmlContent, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('file created')
})