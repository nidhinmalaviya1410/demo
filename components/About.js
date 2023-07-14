import React from 'react'
import Image from 'next/image'


function About() {
  return (
    <>
          <div className='w-[100%]'>
              <div className='flex w-[100%] flex-row Space around px-[100px] py-[100px]'>
                  <div className='flex items-center w-[100%] px-[30px]'>
                      <Image
                          src="/about.jpg"
                          alt="about"
                          className="dark:invert"
                          width={460}
                          height={400}
                          priority
                      />
                  </div>

                  <div className='flex flex-col p-[30px] justify-center'>
                      <div className="flex flex-col  ml-5">
                          <p className='font-bold text-sky-400'>About</p>
                          <h1 className="text-3xl font-bold mt-3">Some more information <br></br> about your business1</h1>
                          <p className="text-1xl mt-3">
                              Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.
                          </p>
                      </div>
                  </div>

              </div>
          </div>

    </>
  )
}

export default About