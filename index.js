const redGreenBlue = require('./rgb-to-hex')
const hexCode = require('./hex-to-rgb')
const rgbToHSL = require('./rgb-to-hsl')
const hexToHSL = require('./hex-to-hsl')

if (process.argv[2] === "hex") {
    
    for(let i = 3; i < process.argv.length; i++){
        console.log(`rgb(${hexCode(process.argv[i]).r}, ${hexCode(process.argv[i]).g}, ${hexCode(process.argv[i]).b})`)
        console.log(hexToHSL(process.argv[i]))
    }

} else if (process.argv[2] === "rgb") {
    let r = parseInt(process.argv[3])
    let g = parseInt(process.argv[4])
    let b = parseInt(process.argv[5])
    let rgb = redGreenBlue.rgbToHex(r, g, b)
    let hsl = rgbToHSL(r, g, b)

    console.log(rgb)
    console.log(`H: ${hsl[0]*360} S: ${hsl[1]*100}% L: ${hsl[2]*100}%`)
} 

