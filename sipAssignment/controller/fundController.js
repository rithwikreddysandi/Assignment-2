const {
    addFund,
    fetchFunds,
    insertNAV
} = require("../models/fundModel");


// POST /api/funds
const createFund = (req, res) => {

    const data = req.body;

    addFund(data, function(err) {

        if (err) {
            return res.status(500).json({
                message: "Error creating fund",
                error: err.message
            });
        }

        res.status(201).json({
            message: "Fund created successfully"
        });
    });
};


// GET /api/funds
// const getFunds = (req, res) => {

//     fetchFunds((err, rows) => {

//         if (err) {
//             return res.status(500).json({
//                 error: err.message
//             });
//         }

//         res.status(200).json(rows);
//     });
// };

const getFunds = async (req, res) => {

    try {

        const rows = await fetchFunds();

        res.status(200).json(rows);

    } catch (err) {

        res.status(500).json(err.message);
    }
};


// PUT /api/funds/:fundId/nav
// const updateNAV = (req, res) => {

//     console.log(req.body);

//     const fundId = req.params.fundId;

//     const data = {
//         fund_id: fundId,
//         nav_value: req.body.nav_value,
//         nav_date: req.body.nav_date
//     };

//     insertNAV(data, function(err) {

//         if (err) {
//             return res.status(500).json(err.message);
//         }

//         res.json({
//             message: "NAV updated successfully"
//         });
//     });
// };



const updateNAV = async (req, res) => {

    try {

        const fundId = req.params.fundId;

        const data = {
            fund_id: fundId,
            nav_value: req.body.nav_value,
            nav_date: req.body.nav_date
        };

        await insertNAV(data);

        res.status(200).json({
            message: "NAV Updated"
        });

    } catch (err) {

        res.status(500).json(err.message);
    }
};



module.exports = {
    createFund,
    getFunds,
    updateNAV
};