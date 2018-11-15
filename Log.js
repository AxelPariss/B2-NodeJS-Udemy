const fs = require('fs')

/* ------------------------
-- RECUPERER LES REVIEWS --
------------------------ */
function writeLog(log) {
    let date = new Date()
    log = date.toLocaleString() + ' - ' + log + '\n'
    fs.appendFile('logs/log.txt', log, function (err) {
        //console.log(err)
    })
}

module.exports = { writeLog }