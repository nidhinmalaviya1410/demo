import React from 'react'
import Image from 'next/image'


function Header() {
    return (
        <main className="flex min-h-screen min-w-full md:h-[600px] justify-center items-center bg-[url('/main.jpeg')] bg-no-repeat bg-fixed">
            <div className='flex-col md:pl-[150px] relative px-[20px] md:px-0'>
                <Image
                    src="/multor-logo.svg"
                    alt="mutour"
                    className="dark:invert"
                    width={150}
                    height={30}
                    priority
                />
                <div className="flex flex-col justify-center mt-[45px]">
                    <h1 className="text-3xl md:text-6xl text-black font-bold w-[50%]">
                        Describe the value of booking an appointment
                    </h1>
                    <p className="mt-7 md:w-[40%] text-2xl">
                        No need to get clever. Tell people exactly what you're offering,
                        then use this space to communicate your key value proposition
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Header