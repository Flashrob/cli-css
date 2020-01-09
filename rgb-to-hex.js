module.exports.componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
module.exports.rgbToHex = (r, g, b) => {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

