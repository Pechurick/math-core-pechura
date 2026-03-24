const { isNumber } = require("./validator");
const add = (a, b) => { if(!isNumber(a) || !isNumber(b)) return "Error"; return a + b; };
module.exports = { add };
