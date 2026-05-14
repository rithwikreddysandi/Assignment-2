"use client";

import InvestorIDContext from "@/app/core/context/InvestorIDContext";
import ProfileContext from "@/app/core/context/ProfileContext";

import { useContext, useEffect, useState } from "react";

export default function Dashboard() {

    const [details, setDetails] = useState(null);
    const [holdings, setHoldings] = useState([]);
    const [token, setToken] = useState("");
    const [transactions, setTransactions] = useState([]);

    const { email } = useContext(ProfileContext);

    const { id } = useContext(InvestorIDContext);

    useEffect(() => {

        const storedToken =
            localStorage.getItem("token");

        if (storedToken) {

            setToken(storedToken);
        }

    }, []);

    const getDetails = async () => {

        try {

            const response = await fetch(
                `http://localhost:4000/api/investors/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            setDetails(result);

        } catch (err) {

            console.log(err);
        }
    };

    const getHoldings = async () => {

        try {

            const response = await fetch(
                `http://localhost:4000/api/investors/${id}/holdings`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            setHoldings(result);

        } catch (err) {

            console.log(err);
        }
    };

    const getTransactions = async () => {

        try {

            const response = await fetch(
                `http://localhost:4000/api/investors/${id}/transactions`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            setTransactions(result);

        } catch (err) {

            console.log(err);
        }
    };

    useEffect(() => {

        if (id && token) {

            getDetails();
            getHoldings();
            getTransactions();
        }

    }, [id, token]);

    return (

        <div className="
            w-full
            min-h-screen
            bg-[#f5f6fa]
            p-8
        ">

            {/* Header */}

            <div className="
                flex
                items-center
                justify-between
                mb-10
            ">

                <div>

                    <h1 className="
                        text-5xl
                        font-bold
                        text-black
                    ">
                        Dashboard
                    </h1>

                    <p className="
                        text-gray-500
                        mt-3
                        text-lg
                    ">
                        Welcome back, {email}
                    </p>

                </div>

                <div className="
                    flex
                    items-center
                    gap-4
                ">

                    <button className="
                        px-6
                        h-12
                        rounded-full
                        bg-lime-200
                        font-semibold
                        text-black
                    ">
                        Full Statistics
                    </button>

                    <button className="
                        px-6
                        h-12
                        rounded-full
                        bg-gray-200
                        text-gray-600
                        font-semibold
                    ">
                        Total Summary
                    </button>

                </div>

            </div>

            {/* Top Grid */}
            <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-8
            ">

                {/* Investor Card */}

                {
                    details && (

                        <div className="
                            bg-white
                            rounded-[32px]
                            p-8
                            shadow-sm
                            border
                            border-gray-100
                        ">

                            <div className="
                                flex
                                items-center
                                justify-between
                                mb-8
                            ">

                                <h2 className="
                                    text-4xl
                                    font-bold
                                    text-black
                                ">
                                    Investor Details
                                </h2>

                                <div className="
                                    w-16
                                    h-16
                                    rounded-3xl
                                    bg-orange-100
                                    flex
                                    items-center
                                    justify-center
                                    text-3xl
                                ">
                                    👤
                                </div>

                            </div>

                            <div className="space-y-6">

                                <div className="
                                    flex
                                    justify-between
                                ">
                                    <span className="
                                        text-gray-500
                                        text-lg
                                    ">
                                        Investor ID
                                    </span>

                                    <span className="
                                        font-bold
                                        text-black
                                        text-lg
                                    ">
                                        {details.investor_id}
                                    </span>
                                </div>

                                <div className="
                                    flex
                                    justify-between
                                ">
                                    <span className="
                                        text-gray-500
                                        text-lg
                                    ">
                                        Name
                                    </span>

                                    <span className="
                                        font-bold
                                        text-black
                                        text-lg
                                    ">
                                        {details.first_name}
                                        {" "}
                                        {details.middle_name}
                                        {" "}
                                        {details.last_name}
                                    </span>
                                </div>

                                <div className="
                                    flex
                                    justify-between
                                ">
                                    <span className="
                                        text-gray-500
                                        text-lg
                                    ">
                                        PAN
                                    </span>
                                    <span className="
                                        font-bold
                                        text-black
                                        text-lg
                                    ">
                                        {details.pancard_no}
                                    </span>
                                </div>

                                <div className="
                                    flex
                                    justify-between
                                ">
                                    <span className="
                                        text-gray-500
                                        text-lg
                                    ">
                                        Aadhaar
                                    </span>

                                    <span className="
                                        font-bold
                                        text-black
                                        text-lg
                                    ">
                                        {details.aadhaar_no}
                                    </span>
                                </div>

                                <div className="
                                    flex
                                    justify-between
                                ">
                                    <span className="
                                        text-gray-500
                                        text-lg
                                    ">
                                        Occupation
                                    </span>

                                    <span className="
                                        font-bold
                                        text-black
                                        text-lg
                                    ">
                                        {details.occupation}
                                    </span>
                                </div>

                            </div>

                        </div>
                    )
                }

                {/* Holdings */}

                <div className="
                    bg-white
                    rounded-[32px]
                    p-8
                    shadow-sm
                    border
                    border-gray-100
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-8
                    ">

                        <h2 className="
                            text-4xl
                            font-bold
                            text-black
                        ">
                            Holdings
                        </h2>

                        <div className="
                            w-16
                            h-16
                            rounded-3xl
                            bg-green-100
                            flex
                            items-center
                            justify-center
                            text-3xl
                        ">
                            📈
                        </div>

                    </div>

                    <div className="space-y-5">

                        {
                            holdings.map((holding, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-gray-50
                                        rounded-3xl
                                        p-6
                                    "
                                >
                                    <h3 className="
                                        text-2xl
                                        font-bold
                                        text-black
                                        mb-5
                                    ">
                                        {holding.fund_name}
                                    </h3>

                                    <div className="space-y-3">

                                        <div className="
                                            flex
                                            justify-between
                                        ">
                                            <span className="
                                                text-gray-500
                                            ">
                                                Units
                                            </span>

                                            <span className="
                                                font-bold
                                                text-black
                                            ">
                                                {holding.total_units}
                                            </span>
                                        </div>

                                        <div className="
                                            flex
                                            justify-between
                                        ">
                                            <span className="
                                                text-gray-500
                                            ">
                                                NAV
                                            </span>

                                            <span className="
                                                font-bold
                                                text-black
                                            ">
                                                ₹{holding.nav_value}
                                            </span>
                                        </div>

                                        <div className="
                                            flex
                                            justify-between
                                        ">
                                            <span className="
                                                text-gray-500
                                            ">
                                                Current Value
                                            </span>

                                            <span className="
                                                font-bold
                                                text-green-500
                                            ">
                                                ₹{holding.current_value}
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                </div>

                {/* Transactions */}

                <div className="
                    lg:col-span-2
                    bg-white
                    rounded-[32px]
                    shadow-sm
                    border
                    border-gray-100
                ">

                    {/* Header */}

                    <div className="
                        flex
                        items-center
                        justify-between
                        px-8
                        pt-8
                        pb-6
                    ">
                        <h2 className="
                            text-[32px]
                            font-bold
                            text-black
                        ">
                            Recent transactions
                        </h2>

                        <div className="
                            flex
                            items-center
                            gap-3
                        ">

                            <button className="
                                w-12
                                h-12
                                rounded-full
                                border
                                border-gray-200
                                flex
                                items-center
                                justify-center
                            ">
                                🔍
                            </button>

                            <button className="
                                px-5
                                h-12
                                rounded-full
                                border
                                border-gray-200
                                text-sm
                                font-semibold
                                text-gray-700
                            ">
                                View all
                            </button>

                        </div>

                    </div>

                    {/* Table Header */}

                    <div className="
                        grid
                        grid-cols-7
                        px-8
                        pb-4
                        text-gray-400
                        text-sm
                        font-semibold
                    ">

                        <p>Type</p>
                        <p>Date</p>
                        <p>Amount</p>
                        <p>Fund</p>
                        <p>Method</p>
                        <p>Units</p>
                        <p>Category</p>

                    </div>

                    {/* Table Rows */}

                    <div className="pb-6">

                        {
                            transactions.map((transaction, index) => (

                                <div
                                    key={index}
                                    className="
                                        grid
                                        grid-cols-7
                                        items-center
                                        px-8
                                        py-5
                                        hover:bg-gray-50
                                        transition-all
                                    "
                                >

                                    <p className="
                                        text-black
                                        font-medium
                                    ">
                                        Investment
                                    </p>

                                    <p className="
                                        text-gray-500
                                        text-sm
                                    ">
                                        {transaction.transaction_date}
                                    </p>

                                    <p className="
                                        text-green-500
                                        font-bold
                                    ">
                                        ₹{transaction.transaction_amount}
                                    </p>

                                    <p className="
                                        text-black
                                        font-medium
                                    ">
                                        {transaction.fund_name}
                                    </p>
                                    <p className="
                                        text-gray-500
                                    ">
                                        SIP
                                    </p>

                                    <p className="
                                        text-black
                                        font-semibold
                                    ">
                                        {transaction.units_allocated}
                                    </p>

                                    <p className="
                                        text-gray-500
                                    ">
                                        Mutual Fund
                                    </p>

                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    );
}