import React from 'react'

import Screen from '../../assets/img/Screen.svg';

const HeroHome = () => (
    <section className='pt-[100px] pb-[170px]'>
        <main className='flex justify-between 2xl:items-center'>
            <div className="">
                <div className="h-[25px] px-3 py-1.5 bg-white rounded-[20px] shadow border-slate-900 justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21">
                            <path fill="#387FF5" fill-rule="evenodd" d="M15.833 2.167a3.256 3.256 0 0 0 2.5 2.5 3.256 3.256 0 0 0-2.5 2.5 3.256 3.256 0 0 0-2.5-2.5 3.256 3.256 0 0 0 2.5-2.5Zm-8.273.166a9.196 9.196 0 0 0 7.06 7.06 9.196 9.196 0 0 0-7.06 7.06A9.196 9.196 0 0 0 .5 9.393a9.196 9.196 0 0 0 7.06-7.06ZM18.333 15.5A4.342 4.342 0 0 1 15 12.167a4.342 4.342 0 0 1-3.333 3.333A4.342 4.342 0 0 1 15 18.833a4.341 4.341 0 0 1 3.333-3.333Z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <p className="opacity-80 text-center text-gray-600 leading-relaxed">Generative Business Intelligence for Analysts</p>
                </div>
                <h1 className="max-w-[660px] text-neutral-800 text-5xl font-bold leading-[55.68px]">Empower Your Business with<span className="text-blue-500 text-5xl font-bold leading-[55.68px]"> AI-Driven Insights</span></h1>
                <p className='max-w-[550px] opacity-80 text-gray-600 text-base font-normal leading-relaxed'>Nimbus harnesses the power of artificial intelligence to transform your business data into actionable insights, propelling you to new heights of success</p>
                <div className="flex items-center gap-[12px]">
                    <a href="" className='flex justify-center items-center py-[12px] px-[16px] rounded-xl bg-[#387FF5] text-white'>
                        Start your free trial
                    </a>

                    <a href="" className='px-2 py-[8px] bg-white justify-center items-center inline-flex text-zinc-700 text-base font-medium leading-tight rounded-xl border-[2px] border-[#D1D5E2] border-solid'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
                            <path fill="#343844" d="M16.516 11.405c.645.563.645 1.627 0 2.19l-6.394 5.59C9.27 19.928 8 19.272 8 18.088V6.91c0-1.184 1.27-1.84 2.121-1.095l6.395 5.589Z"/>
                        </svg>

                        Watch video
                    </a>
                </div>
            </div>

            <div className="">
                <img className="object-cover w-full 2xl:w-[700px]" src={ Screen } alt="" />
            </div>
        </main>
    </section>
    
);

export default HeroHome