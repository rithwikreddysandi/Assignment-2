// "use client";

// import { useEffect, useState } from "react";

// export default function Funds() {

//     const [funds, setFunds] = useState([]);

//     async function getFunds() {

//         try {

//             const response = await fetch(
//                 "http://localhost:4000/api/funds"
//             );

//             const result = await response.json();

//             console.log(result);

//             setFunds(result || []);

//         } catch (err) {

//             console.log(err);

//         }
//     }

//     useEffect(() => {

//         getFunds();

//     }, []);

//     return (

//         <div className="w-full min-h-screen bg-[#f5f7fb] p-8">

//             {/* Header */}

//             <div className="mb-10">

//                 <h1 className="text-5xl font-bold text-[#0b1739]">
//                     Funds
//                 </h1>

//                 <p className="text-gray-500 mt-3 text-lg">
//                     Explore and invest in available mutual funds
//                 </p>

//             </div>

//             {/* Funds Grid */}

//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

//                 {
//                     funds.map((fund, index) => (

//                         <div
//                             key={index}
//                             className="
//                                 bg-white
//                                 rounded-3xl
//                                 shadow-sm
//                                 p-7
//                                 border
//                                 border-gray-100
//                                 hover:shadow-lg
//                                 transition-all
//                                 duration-300
//                             "
//                         >

//                             {/* Top Section */}

//                             <div className="flex justify-between items-start">

//                                 <div>

//                                     <h1 className="text-2xl font-bold text-[#0b1739]">
//                                         {fund.fund_name}
//                                     </h1>

//                                     <p className="text-gray-500 mt-2">
//                                         {fund.fund_category}
//                                     </p>

//                                 </div>

//                                 <div
//                                     className="
//                                         w-14
//                                         h-14
//                                         rounded-2xl
//                                         bg-green-100
//                                         flex
//                                         items-center
//                                         justify-center
//                                         text-2xl
//                                     "
//                                 >
//                                     📈
//                                 </div>

//                             </div>

//                             {/* Details */}

//                             <div className="mt-8 space-y-4">

//                                 <div className="flex justify-between">

//                                     <p className="text-gray-500">
//                                         NAV
//                                     </p>

//                                     <p className="font-bold text-[#0b1739]">
//                                         ₹{fund.nav}
//                                     </p>

//                                 </div>

//                                 <div className="flex justify-between">

//                                     <p className="text-gray-500">
//                                         AMC
//                                     </p>

//                                     <p className="font-semibold text-[#0b1739]">
//                                         {fund.amc_name}
//                                     </p>

//                                 </div>

//                                 <div className="flex justify-between">

//                                     <p className="text-gray-500">
//                                         Risk
//                                     </p>

//                                     <p className="font-semibold text-orange-500">
//                                         {fund.risk_level}
//                                     </p>

//                                 </div>

//                             </div>

//                             {/* Buttons */}

//                             <div className="flex gap-4 mt-8">

//                                 <button
//                                     className="
//                                         flex-1
//                                         bg-black
//                                         text-white
//                                         py-3
//                                         rounded-2xl
//                                         font-semibold
//                                         hover:bg-gray-800
//                                         transition-all
//                                     "
//                                 >
//                                     Start SIP
//                                 </button>

//                                 <button
//                                     className="
//                                         flex-1
//                                         border
//                                         border-gray-300
//                                         py-3
//                                         rounded-2xl
//                                         font-semibold
//                                         hover:bg-gray-100
//                                         transition-all
//                                     "
//                                 >
//                                     View Details
//                                 </button>

//                             </div>

//                         </div>
//                     ))
//                 }

//             </div>

//         </div>
//     );
// }


"use client";

import { useEffect, useState } from "react";

export default function Funds() {

    const [funds, setFunds] = useState([]);

    const getFunds = async () => {

        try {

            const response = await fetch(
                "http://localhost:4000/api/funds"
            );

            const result = await response.json();

            console.log(result);

            setFunds(result || []);

        } catch (err) {

            console.log(err);
        }
    };

    useEffect(() => {

        getFunds();

    }, []);

    return (

        <div className="p-10">

            <h1 className="text-4xl font-bold text-[#0b1742]">
                Funds
            </h1>

            <p className="text-gray-500 mt-4 text-2xl">
                Explore and invest in available mutual funds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                {
                    funds.map((fund, index) => (

                        <div
                            key={index}
                            className="
                                bg-white
                                rounded-3xl
                                shadow-sm
                                p-8
                                border
                            "
                        >

                            <div className="flex justify-between items-start">

                                <div>

                                    <h1 className="text-3xl font-bold text-[#0b1742]">
                                        {fund.fund_name}
                                    </h1>

                                    <p className="text-gray-500 mt-2">
                                        {fund.amc_name}
                                    </p>

                                </div>

                                <div
                                    className="
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-green-100
                                        flex
                                        items-center
                                        justify-center
                                        text-2xl
                                    "
                                >
                                    📈
                                </div>

                            </div>

                            <div className="mt-8 space-y-4">

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Category
                                    </span>

                                    <span className="font-semibold">
                                        {fund.fund_category}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Fund Type
                                    </span>

                                    <span className="font-semibold">
                                        {fund.fund_type}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        NAV
                                    </span>

                                    <span className="font-bold text-green-600">
                                        ₹ {fund.nav || "N/A"}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Risk
                                    </span>

                                    <span
                                        className="
                                            bg-yellow-100
                                            text-yellow-700
                                            px-3
                                            py-1
                                            rounded-full
                                            text-sm
                                        "
                                    >
                                        {fund.risk_level || "Moderate"}
                                    </span>

                                </div>

                            </div>

                            <button
                                className="
                                    mt-8
                                    w-full
                                    bg-[#0b1742]
                                    text-white
                                    py-4
                                    rounded-2xl
                                    font-semibold
                                    hover:opacity-90
                                "
                            >
                                Invest Now
                            </button>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}