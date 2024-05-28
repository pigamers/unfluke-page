import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { TiArrowSortedDown } from 'react-icons/ti';

export default function Leaderboard() {
    return (
        <div className="relative sm:rounded-lg my-4">
            <div className='flex flex-row justify-between items-center mx-20'>
                <h1 className='text-2xl font-semibold py-5'>Basic Backtest</h1>
                <button type="button" className="hover:bg-[#e2759c] hover:text-white border border-[#e2759c] flex items-center gap-2 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Slippage <TiArrowSortedDown size={15} /></button>
            </div>
            <table className="w-11/12 m-auto text-sm text-left rtl:text-right text-gray-500 border-[#e2759c] border">
                <thead className="text-lg cursor-default text-gray-700 font-bold bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Rank
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 flex items-center">
                            Calmar Ratio
                            <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Overrall Profit
                        </th>
                        <th scope="col" className="px-6 py-3 flex items-center">
                            Avg. Daily Profit
                            <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Win % (Day)
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price (Rs)
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className='text-lg text-black text-center'>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            1
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center justify-center">
                            <FaArrowTrendUp style={{ color: "green" }} size={20} />
                            3.96
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            -
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            2
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex items-center justify-center gap-2">
                            <FaArrowTrendUp style={{ color: "green" }} size={20} />
                            3.96
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            -
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            3
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center justify-center">
                            <FaArrowTrendUp style={{ color: "red", rotate: "180deg" }} size={20} />
                            1.68
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            500
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            4
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center justify-center">
                            <FaArrowTrendUp style={{ color: "green" }} size={20} />
                            3.96
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            -
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">Buy</a>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            5
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center justify-center">
                            <FaArrowTrendUp style={{ color: "green" }} size={20} />
                            3.96
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            -
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">Buy</a>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            6
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center justify-center">
                            <FaArrowTrendUp style={{ color: "red", rotate: "180deg" }} size={20} />
                            0.96
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            -
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            7
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center justify-center">
                            <FaArrowTrendUp style={{ color: "green" }} size={20} />
                            3.96
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            -
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            8
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center justify-center">
                            <FaArrowTrendUp style={{ color: "red", rotate: "180deg" }} size={20} />
                            1.96
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            -
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">Buy</a>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            9
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center justify-center">
                            <FaArrowTrendUp style={{ color: "green" }} size={20} />
                            3.96
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            600
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                            10
                        </th>
                        <td className="px-6 py-4">
                            Selling with re entr
                        </td>
                        <td className="px-6 py-4 flex gap-2 items-center justify-center">
                            <FaArrowTrendUp style={{ color: "green" }} size={20} />
                            3.96
                        </td>
                        <td className="px-6 py-4">
                            381848
                        </td>
                        <td className="px-6 py-4">
                            319.54
                        </td>
                        <td className="px-6 py-4">
                            0.65
                        </td>
                        <td className="px-6 py-4">
                            -
                        </td>
                        <td className="px-6 py-4">
                            <a href="/" className="font-medium text-blue-600 hover:underline">View</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
