import React from 'react'
import Image from 'next/image'


function Footer() {
    return (
        <>

            <div className='w-[100%] h-[150px] bg-slate-800 flex items-center justify-between px-[100px]'>
                <div className='footer_wrapper_left'>
                    <Image
                        src="/mutor.svg"
                        alt="mutour"
                        className="dark:invert"
                        width={90}
                        height={20}
                        priority
                    />
                </div>
                <div className='footer_wrapper_right text-white'>
                    <p>@2020 Insert Name Here. All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer