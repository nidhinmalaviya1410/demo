import React from 'react'
import Image from 'next/image'


function Visitor() {
    return (
        <>
            <div className='w-[100%] h-[300px] md:h-[700px] bg-cyan-100'>
                <div className='flex flex-col mt-[50px]'>
                    <div className="flex flex-col justify-center px-[30px] mt-[50px] md:mt-[150px] items-center md:px-[35px] w-full">
                        <h1 className="text-2xl md:text-5xl font-bold">Show visitors what they're signing up for</h1>
                        <p className="text-1xl mt-5 ">
                            Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] bg-white h-[200px] md:h-[350px] relative'>
                <div className='absolute bottom-[10%] right-[0%] p-[20px] md:bottom-[10%] md:right-[18%]'>
                    <Image
                        src="/visitor.jpg"
                        alt="main"
                        className="dark:invert"
                        width={990}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </>
    )
}

export default Visitor