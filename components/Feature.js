import React from 'react'
import Image from 'next/image'

function Feature() {
    return (
        <>
            <div className='w-full'>
                <div className='flex w-full md:flex-row md:px-[100px] md:py-[50px] flex-col p-0'>
                    <div className='flex flex-col px-[30px] py-[30px]'>
                        <div>
                            <Image
                                src="/feature1.jpg"
                                alt="Feature1"
                                className="dark:invert"
                                width={380}
                                height={169}
                                priority
                            />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <div className="flex flex-col">
                                <h1 className="text-1xl font-bold">FEATURE 1</h1>
                                <p className="text-1xl mt-2 w-[70%]">
                                    Talk about some of the details of your offer with a focus on the value people get back.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col px-[30px] py-[30px]'>
                        <div>
                            <Image
                                src="/feature2.jpg"
                                alt="Feature2"
                                className="dark:invert"
                                width={380}
                                height={169}
                                priority
                            />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <div className="flex flex-col">
                                <h1 className="text-1xl font-bold">FEATURE 2</h1>
                                <p className="text-1xl mt-2 w-[70%]">
                                    Talk about some of the details of your offer with a focus on the value people get back.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col px-[30px] py-[30px]'>
                        <div>
                            <Image
                                src="/feature3.jpg"
                                alt="Feature3"
                                className="dark:invert"
                                width={380}
                                height={169}
                                priority
                            />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <div className="flex flex-col">
                                <h1 className="text-1xl font-bold">FEATURE 3</h1>
                                <p className="text-1xl mt-2 w-[70%]">
                                    Talk about some of the details of your offer with a focus on the value people get back.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature