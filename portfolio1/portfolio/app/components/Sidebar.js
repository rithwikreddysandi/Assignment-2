"use client";

import { usePathname, useRouter } from "next/navigation";

import {
    LayoutDashboard,
    User,
    Wallet,
    ArrowLeftRight,
    Target,
    DollarSign,
    BarChart3,
    Settings,
    LogOut,
    HelpCircle,
} from "lucide-react";

export default function Sidebar() {

    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        {
            name: "Dashboard",
            icon: <LayoutDashboard size={20} />,
            path: "/Dashboard"
        },
        {
            name: "Profile",
            icon: <User size={20} />,
            path: "/Profile"
        },
        {
            name: "Holdings",
            icon: <Wallet size={20} />,
            path: "/Holdings"
        },
        {
            name: "Transactions",
            icon: <ArrowLeftRight size={20} />,
            path: "/Transactions"
        },
        {
            name: "Networth",
            icon: <Target size={20} />,
            path: "/NetWorth"
        },
        {
            name: "Funds",
            icon: <DollarSign size={20} />,
            path: "/Funds"
        },
        {
            name: "Analytics",
            icon: <BarChart3 size={20} />,
            path: "/Analytics"
        },
        {
            name: "Settings",
            icon: <Settings size={20} />,
            path: "/Settings"
        },
    ];

    return (

        <div className="
            w-[260px]
            h-screen
            bg-white
            border-r
            border-gray-200
            flex
            flex-col
            justify-between
            px-5
            py-7
        ">

            {/* Logo */}

            <div>

                <div className="flex items-center gap-3 px-2">

                    <div className="
                        w-10
                        h-10
                        rounded-full
                        bg-black
                        flex
                        items-center
                        justify-center
                    ">
                        <DollarSign className="text-white w-5 h-5" />
                    </div>

                    <h1 className="
                        text-[28px]
                        font-bold
                        text-black
                    ">
                        SafePay
                    </h1>

                </div>

                {/* Menu */}

                <div className="flex flex-col gap-2 mt-12">

                    {menuItems.map((item, index) => (

                        <BarItem
                            key={index}
                            icon={item.icon}
                            name={item.name}
                            path={item.path}
                            pathname={pathname}
                            router={router}
                        />

                    ))}

                </div>

            </div>

            {/* Bottom */}

            <div className="flex flex-col gap-3">

                <div className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    text-gray-500
                    hover:bg-gray-100
                    cursor-pointer
                    transition
                ">
                    <HelpCircle size={20} />

                    <span className="text-[15px] font-medium">
                        Help
                    </span>

                </div>

                <div className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    text-gray-500
                    hover:bg-gray-100
                    cursor-pointer
                    transition
                ">
                    <LogOut size={20} />

                    <span className="text-[15px] font-medium">
                        Log out
                    </span>

                </div>

            </div>

        </div>
    );
}

export function BarItem({
    icon,
    name,
    path,
    pathname,
    router,
}) {

    const isActive = pathname === path;

    return (

        <div
            onClick={() => router.push(path)}
            className={`
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-2xl
                cursor-pointer
                transition-all
                duration-200

                ${isActive
                    ? "bg-lime-200 text-black"
                    : "text-gray-500 hover:bg-gray-100"}
            `}
        >

            <span>{icon}</span>

            <span className="text-[15px] font-semibold">
                {name}
            </span>

        </div>
    );
}