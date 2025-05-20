import Image from 'next/image';
import React from 'react';
import target from '../../assets/images/Target.png';

export default function Location() {
  return (
    <section
      className="container mx-auto md:mt-[80px] p-2 md:p-2 lg:p-2"
      aria-labelledby="location-heading"
    >
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3
            id="location-heading"
            className="text-[#121212] text-[24px] font-medium leading-normal"
          >
            Location
          </h3>
          <address className="not-italic text-[#474747] text-[16px] font-normal leading-[2.34]">
            Dhaka, Bangladesh
          </address>
        </div>

        <div className="flex items-center gap-2">
          <a
            className="text-[#038317] text-[16px] font-medium leading-normal underline"
            href="https://www.google.com/maps?q=medona+tower"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location in Google Maps"
          >
            View in Map
          </a>
          <Image
            src={target}
            alt="Map pin icon"
            className="size-6 shadow-2xl"
          />
        </div>
      </div>

      <div
        className="relative text-right w-full h-[550px] rounded-xl overflow-hidden"
        aria-label="Map showing location"
      >
        <iframe
          title="Map showing Medona Tower location"
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=1435&height=550&hl=en&q=medona%20tower&t=&z=13&ie=UTF8&iwloc=B&output=embed"
          allowFullScreen
        />
      </div>
    </section>
  );
}
