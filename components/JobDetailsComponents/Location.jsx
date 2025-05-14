import Image from 'next/image'
import React from 'react'
import target from '../../assets/images/Target.png'

export default function Location() {
    return (
        <section className='container mx-auto md:mt-[80px] p-2 md:p-0'>
            <div className='flex justify-between items-end mb-6'>
                <div>
                    <h3 className='text-[#121212] text-[24px] font-medium leading-normal'>Location</h3>
                    <p className='text-[#474747] text-[16px] font-normal leading-[2.34]'>Dhaka, Bangladesh</p>
                </div>
                <div className='flex items-center gap-2 '>
                    <a
                        className='text-[#038317] text-[16px] font-medium leading-normal underline'
                        href="https://www.google.com/maps?q=medona+tower"
                        target="_blank"
                        rel="noopener noreferrer">
                        View In Map
                    </a>
                    <Image src={target} alt='Map Target Image' className='size-6 shadow-2xl' />
                </div>
            </div>
            <div style={{ position: 'relative', textAlign: 'right', width: '100%', height: '550px' }}>
                <div style={{ overflow: 'hidden', background: 'none', width: '100%', height: '100%' }}>
                    <iframe
                        className="embed-map-frame rounded-xl"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=1435&height=550&hl=en&q=medona%20tower&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                        style={{ width: '100%', height: '100%' }}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
