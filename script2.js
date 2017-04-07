"use strict";

var style = require("./style.css");
module.exports = function () {
    document.write('<p class="' + style.green + '">Green text</p>');
}
