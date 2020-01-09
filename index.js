const redGreenBlue = require('./rgb-to-hex')
const hexCode = require('./hex-to-rgb')

if (process.argv[2] === "hex") {
    console.log(hexCode.hexToRgb(process.argv[3]))

} else if (process.argv[2] === "rgb") {
    let r = parseInt(process.argv[3])
    let g = parseInt(process.argv[4])
    let b = parseInt(process.argv[5])

    let rgb = redGreenBlue.rgbToHex(r, g, b)

    console.log(rgb)
}