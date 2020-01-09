const hexToRGB = require('./hex-to-rgb')
const rgbToHSL = require('./rgb-to-hsl')

module.exports = hexToHsl = (color) => {
    const rgb = hexToRGB(color);
    let r = rgb.r
    let g = rgb.g
    let b = rgb.b
    const hsl = rgbToHSL(r, g, b);

    // return console.log(hsl)
    return `H: ${hsl[0]*360} S: ${ hsl[1]*100 }% L: ${ hsl[2]*100 }%`;
  }