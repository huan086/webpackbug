"use strict";

var style = require("./style.css");
module.exports = global.blue = function () {
    document.write('<p class="' + style.blue + '">Blue text</p>');
}
