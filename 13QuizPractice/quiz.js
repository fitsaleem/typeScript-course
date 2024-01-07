"use strict";
// typescript quiz 
Object.defineProperty(exports, "__esModule", { value: true });
// 1:
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
var colorName = color[2];
console.log(colorName);
exports.default = {};
