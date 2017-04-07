"use strict";

var style = require("./style.css");
module.exports = global.green = function () {
    document.write('<p class="' + style.green + '">Green text</p>');
}
