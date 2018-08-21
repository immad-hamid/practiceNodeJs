console.log(__filename);
console.log(__dirname);

let url = "https://something.com";

function log () {
    return url
}

// this is fine if we want to export objects
// module.exports.log = log;

// this would be fine if we want to export just the functions
module.exports = log;