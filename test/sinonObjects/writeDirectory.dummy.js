'use strict';

const templateHTML = `
<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
    +               content="width=device-width, user-scalable=no,
    +               initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>testFile</title>
    </head>
    <body>
        <h1></h1>
        <script type="text/javascript" src="${name}.js"></script>
    </body>
</html>`;
const templateCSS = `${name}{\n}`;
const templateJS = `(function ${name} () {\n\t}();`;

module.exports = {templateHTML, templateCSS, templateJS};
