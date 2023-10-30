import React from 'react'

const Reviews = () => (
    <section className='pt-[217px]'>
        <div className="flex flex-col justify-center items-center">
            <h1 className='max-w-[800px] text-center text-neutral-800 text-[39px] font-bold leading-[45.24px] p-[16px] m-0'>The Nimbus Experience</h1>
            <p className='max-w-[680px] opacity-80 text-center text-gray-600 text-base font-normal leading-relaxed p-0 m-0'>At Nimbus, we pride ourselves on delivering top-notch AI-driven business analytics. But don't just take our word for it. Hear what our satisfied users have to say.</p>
        </div>
        <div className="flex gap-[24px] pt-[48px]">
            <div className="reviews__block">
                <p className='reviews__text'>The seamless integrations and customizable dashboards make Nimbus an indispensable tool for our business operations.</p>
                <div className="reviews__avatar">
                    <img src="" alt="avatar" />
                    <h1 className='reviews__avatarTitle'>Nathan D. Hall</h1>
                </div>
            </div>

            <div className="reviews__block">
                <p className='reviews__text'>The seamless integrations and customizable dashboards make Nimbus an indispensable tool for our business operations.</p>
                <div className="reviews__avatar">
                    <img src="" alt="avatar" />
                    <h1 className='reviews__avatarTitle'>Nathan D. Hall</h1>
                </div>
            </div>
            
            <div className="reviews__block">
                <p className='reviews__text'>The seamless integrations and customizable dashboards make Nimbus an indispensable tool for our business operations.</p>
                <div className="reviews__avatar">
                    <img src="" alt="avatar" />
                    <h1 className='reviews__avatarTitle'>Nathan D. Hall</h1>
                </div>
            </div>

            <div className="reviews__block">
                <p className='reviews__text'>The seamless integrations and customizable dashboards make Nimbus an indispensable tool for our business operations.</p>
                <div className="reviews__avatar">
                    <img src="" alt="avatar" />
                    <h1 className='reviews__avatarTitle'>Nathan D. Hall</h1>
                </div>
            </div>
        </div>
    </section>
);

export default Reviews;