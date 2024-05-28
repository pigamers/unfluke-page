import React from 'react'
import { MdLeaderboard } from "react-icons/md";
import { TiArrowSortedDown } from 'react-icons/ti';

export default function NextTop() {
    return (
        <ul className="w-screen flex flex-row items-center gap-10 justify-center m-auto py-3">
            <li>
                <button className="hover:text-[#e2759c] hover:scale-105 text-black flex gap-2 text-md font-bold">
                    <MdLeaderboard size={25} />
                    Leader Board
                </button>
            </li>
            <li>
                <button className="items-center hover:text-[#e2759c] hover:scale-105 text-black flex gap-2 text-md font-bold">
                    Historical Trading
                    <TiArrowSortedDown size={15} />
                </button>
            </li>
            <li>
                <button className="hover:text-[#e2759c] hover:scale-105 text-black flex gap-2 text-md font-bold">
                    Historical Chart
                </button>
            </li>
            <li>
                <button className="hover:text-[#e2759c] hover:scale-105 text-black flex gap-2 text-md font-bold">
                    Scanners
                </button>
            </li>
            <li>
                <button className="hover:text-[#e2759c] hover:scale-105 text-black flex gap-2 text-md font-bold">
                    Alerts
                </button>
            </li>
            <li>
                <button className="hover:text-[#e2759c] hover:scale-105 text-black flex gap-2 text-md font-bold">
                    Basic Backtest
                </button>
            </li>
            <li>
                <button className="hover:text-[#e2759c] hover:scale-105 text-black flex gap-2 text-md font-bold">
                    Advanced Backtest
                </button>
            </li>
            <li>
                <button className="hover:text-[#e2759c] hover:scale-105 text-black flex gap-2 text-md font-bold">
                    Pricing
                </button>
            </li>
            <li>
                <button className="hover:text-[#e2759c] hover:scale-105 text-black flex gap-2 text-md font-bold">
                    My Earnings
                </button>
            </li>
        </ul>

    )
}
