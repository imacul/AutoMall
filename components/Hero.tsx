"use client";

import Image from "next/image";
import {CustomButton} from "@/components";


const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-32 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton
        title="Explore Cars!"
        containerStyles="mb-10 bg-primary-blue text-white rounded-full mt-10 transition hover:scale-125"
        handleClick={handleScroll}
         />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
          <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero;