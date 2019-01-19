exports = module.exports = {
    otherController
}


// own modules
const package = require("../package");


function otherController(req, res) {
    res.send({
        ok: false,
        status: 404,
        message: "Path not found",
        payload: [{
            info: `${package.name} ${package.version}`
        }]
    });
}