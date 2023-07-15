import React from 'react'
import Image from 'next/image'


function Footer() {
    return (
        <>

            <div className='w-full h-[150px] bg-slate-800 flex flex-col py-[25px] items-center md:flex-row md:justify-between md:px-[100px]'>
                <div className='footer_wrapper_left mt-5 md:mt-0'>
                    <Image
                        src="/mutor.svg"
                        alt="mutour"
                        className="dark:invert"
                        width={90}
                        height={20}
                        priority
                    />
                </div>
                <div className='footer_wrapper_right text-white mt-3 md:mt-0'>
                    <p>@2020 Insert Name Here. All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer