import React from 'react'
import logo from './logo.png';
import { FaBell } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { TiArrowSortedDown } from 'react-icons/ti';
import { SiBitcoinsv } from 'react-icons/si';


export default function TopBar() {
    return (
        <nav class="mt-2">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between m-auto p-4">
                <div className='flex flex-row items-center gap-2'>
                    <img src={logo} className='h-16' alt='logo' />
                    <h2 className='text-2xl'>React JS</h2>
                </div>
                <div>
                    <ul class="flex flex-wrap items-center justify-center">
                        <li className='px-5'>
                            <div className='flex flex-row items-center'>
                                <FaBell size={30} style={{color: "orange"}}/>
                                <TiArrowSortedDown size={15} />
                            </div>
                        </li>
                        <li className='px-5'>
                            <div>
                                <SiBitcoinsv size={35} style={{color: "gold"}}/>
                            </div>
                        </li>
                        <li className='px-5'>
                            <div className='flex flex-row items-center gap-1'>
                                <FaRegCircleUser style={{color: "blue"}} size={35} />
                                <TiArrowSortedDown size={15} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
