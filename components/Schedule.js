import React from 'react'
import Image from 'next/image'

export default function Schedule({ data }) {

    return (
        <div className="flex flex-row p-[25px]">
            <div className=''>
                <Image
                    src={`${data.image}`}
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={60}
                    height={35}
                    priority
                />
            </div>
            <div className="flex flex-col ml-5">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-1xl">
                    {data.discription}
                </p>
            </div>
        </div>
    )
}
