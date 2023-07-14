import React from 'react'
import Image from 'next/image'


function Visitor() {
    return (
        <>
            <div className='w-[100%] h-[700px] bg-cyan-100'>
                <div className='flex flex-col mt-[50px]'>
                    <div className="flex flex-col m-[auto] mt-[150px] w-[35%]">
                        <h1 className="text-5xl font-bold">Show visitors what they're signing up for</h1>
                        <p className="text-1xl mt-5 ">
                            Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] bg-white h-[350px] relative'>
                <div className='absolute bottom-[10%] right-[18%]'>
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