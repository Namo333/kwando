import React from 'react'

const Info = () => (
    <section>
        <div className="flex justify-between gap-[40px] items-center">
            <div className="">
                <div className=" h-[25px] px-3 py-1.5 bg-white rounded-[20px] shadow border-slate-900 justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21">
                            <path fill="#387FF5" fill-rule="evenodd" d="M15.833 2.167a3.256 3.256 0 0 0 2.5 2.5 3.256 3.256 0 0 0-2.5 2.5 3.256 3.256 0 0 0-2.5-2.5 3.256 3.256 0 0 0 2.5-2.5Zm-8.273.166a9.196 9.196 0 0 0 7.06 7.06 9.196 9.196 0 0 0-7.06 7.06A9.196 9.196 0 0 0 .5 9.393a9.196 9.196 0 0 0 7.06-7.06ZM18.333 15.5A4.342 4.342 0 0 1 15 12.167a4.342 4.342 0 0 1-3.333 3.333A4.342 4.342 0 0 1 15 18.833a4.341 4.341 0 0 1 3.333-3.333Z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <p className="opacity-80 text-center text-gray-600 leading-relaxed">Our strategies</p>
                </div>
                <h1 class="max-w-[508px] text-neutral-800 text-[39px] font-bold leading-[45.24px]">Improve your Continuous Design Data workflow</h1>
            </div>
            <div className="">
                <h1 className='max-w-[476px] opacity-80 text-gray-600 text-base font-normal leading-relaxed pb-[15px]'>Specify helps you gain control of your design system across teams and products.</h1>
                <div className="flex gap-[12px]">
                    <a className="flex justify-center items-center py-[12px] px-[16px] rounded-xl bg-[#387FF5] text-white" href=''>Get a demo</a>
                    <a className='flex justify-center items-center py-[12px] px-[16px] rounded-xl border-[2px] border-[#B6D1FB] border-solid text-[#387FF5]' href=''>Research</a>
                </div>
            </div>
        </div>

        <div className="">
            <div className="">

            </div>
            <div className="">
                
            </div>
        </div>
    </section>
);

export default Info