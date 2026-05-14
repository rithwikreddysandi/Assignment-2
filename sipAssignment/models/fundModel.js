// const db = require('../utility/pgManager');


// // CREATE FUND
// const addFund = (data, callback) => {

//     const query = `
//         INSERT INTO mutual_fund
//         (fund_id, amc_id, fund_name, fund_category, fund_type)
//         VALUES (?, ?, ?, ?, ?)
//     `;

//     db.run(
//         query,
//         [
//             data.fund_id,
//             data.amc_id,
//             data.fund_name,
//             data.fund_category,
//             data.fund_type
//         ],
//         callback
//     );
// };


// // GET ALL FUNDS
// const fetchFunds = (callback) => {

//     const query = `
//         SELECT
//         mf.fund_id,
//         mf.fund_name,
//         mf.fund_category,
//         mf.fund_type,
//         mf.nav,
//         mf.risk_level,
//         a.amc_name
//         FROM mutual_fund mf
//         INNER JOIN amc a
//         ON mf.amc_id = a.amc_id
//     `;

//     db.all(query, [], (err, rows) => {

//         if (err) {
//             console.log(err);
//         }

//         callback(err, rows);
//     });
// };

// // UPDATE NAV
// const insertNAV = (data, callback) => {

//     const query = `
//         INSERT INTO nav_history
//         (fund_id, nav_value, nav_date)
//         VALUES (?, ?, ?)
//     `;

//     db.run(
//         query,
//         [
//             data.fund_id,
//             data.nav_value,
//             data.nav_date
//         ],
//         function(err) {
//             callback(err);
//         }
//     );
// };

// module.exports = {
//     addFund,
//     fetchFunds,
//     insertNAV
// };





const db = require('../utility/pgManager');


// CREATE FUND
const addFund = async (data) => {

    const query = `
        INSERT INTO mutual_fund
        (
            fund_id,
            amc_id,
            fund_name,
            fund_category,
            fund_type
        )
        VALUES ($1, $2, $3, $4, $5)
    `;

    const values = [
        data.fund_id,
        data.amc_id,
        data.fund_name,
        data.fund_category,
        data.fund_type
    ];

    return await db.query(query, values);
};


// GET ALL FUNDS
const fetchFunds = async () => {

    const query = `
        SELECT
            mf.fund_id,
            mf.fund_name,
            mf.fund_category,
            mf.fund_type,
            mf.nav,
            mf.risk_level,
            a.amc_name
        FROM mutual_fund mf
        INNER JOIN amc a
        ON mf.amc_id = a.amc_id
    `;

    const result = await db.query(query);

    return result.rows;
};


// INSERT NAV
const insertNAV = async (data) => {

    const query = `
        INSERT INTO nav_history
        (
            fund_id,
            nav_value,
            nav_date
        )
        VALUES ($1, $2, $3)
    `;

    const values = [
        data.fund_id,
        data.nav_value,
        data.nav_date
    ];

    return await db.query(query, values);
};


module.exports = {
    addFund,
    fetchFunds,
    insertNAV
};