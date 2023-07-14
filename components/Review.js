import React from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function Review() {
    return (
        <>
            <div className='w-[100%] py-[60px]'>
                <div className='flex w-[100%] justify-center'>
                    <p className='font-bold text-sky-400'>DON'T JUST TAKE OUR WORD FOR IT</p>
                </div>
                <div className='flex w-[100%] flex-row Space around px-[100px] py-[50px]'>
                    <div className='flex flex-col p-[30px]'>
                        <div>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <h1 className='text-2xl w-[70%]'>Share a real testimonial that hits some of your benefits (but isn't too sales-y).</h1>
                        </div>
                        <div className='flex flex-row mt-5'>
                            <Avatar alt="Remy Sharp" src="/avatar1.jpg" variant="square" />
                            <div className="flex flex-col ml-5">
                                <h1 className="text-sm font-bold">Real Name</h1>
                                <p className="text-sm">
                                    Location
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col p-[30px]'>
                        <div>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <h1 className='text-2xl w-[70%]'>Share a real testimonial that hits some of your benefits (but isn't too sales-y).</h1>
                        </div>
                        <div className='flex flex-row mt-5'>
                            <Avatar alt="Remy Sharp" src="/avatar2.jpg" variant="square" />
                            <div className="flex flex-col ml-5">
                                <h1 className="text-sm font-bold">Real Name</h1>
                                <p className="text-sm">
                                    Location
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review