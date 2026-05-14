const sqlite3 = require('sqlite3')
const db = new sqlite3.Database("D:\\sipNew.db", (error) => {
    if (error) {
        console.log("Error Occured")
    } else {
        console.log("Connected to DB")
    }
})

module.exports = db;