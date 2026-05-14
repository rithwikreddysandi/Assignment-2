/*
const express = require('express');

const app = express();
const db = require('./utility/dbManager');
app.use(express.json());

const fundRoutes = require('./routes/fundRoutes');
const sipRoutes = require("./routes/sipRoutes");
const investorRoutes = require("./routes/investorRoutes");


app.use('/api/funds', fundRoutes);
app.use("/api/sips", sipRoutes);
app.use("/api/investors", investorRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 

*/

const express = require("express");
const client = require("./utility/pgManager");
const redis = require("redis");
const cors = require("cors");

const app = express();
const investorRoutes = require("./routes/investorRoutes");
const fundRoutes = require('./routes/fundRoutes');


app.use(cors());
app.use(express.json());
app.use("/api/investors", investorRoutes);
app.use("/api/funds", fundRoutes);


app.post("/api/investor/create", async (request, response) => {
  const {
    investor_id,
    first_name,
    middle_name,
    last_name,
    pancard_no,
    aadhaar_no,
    date_of_birth,
    gender,
    occupation,
    passport_no,
  } = request.body;

  client
    .query(
      `INSERT into investor(investor_id,first_name,middle_name,last_name,pancard_no,aadhaar_no,date_of_birth,gender,occupation,passport_no)
            values ('${investor_id}', '${first_name}', '${middle_name}', '${last_name}', '${pancard_no}', '${aadhaar_no}', '${date_of_birth}', '${gender}', '${occupation}', '${passport_no}');`,
    )
    .then(async (value) => {
      console.log(JSON.stringify(value));
      
      response.send(value);
    })
    .catch(async (error) => {
      console.error(`Error ${error}`);
     
      response.json(error);
    });
});



// app.post("/api/investor/login", async (request, response) => {

//     const { email, password } = request.body;

//     if(email === "ram@gmail.com" && password === "ram"){

//         return response.status(200).json({
//             success: true,
//             message: "Login Success",
//             token: "sample_jwt_token"
//         });
//     }

//     return response.status(401).json({
//         success: false,
//         message: "Invalid Credentials"
//     });

// });

app.listen(4000, () => {
  console.log("Server started");
});
