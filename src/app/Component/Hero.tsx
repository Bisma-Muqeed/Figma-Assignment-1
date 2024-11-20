import style from "next/font/google";
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className = "flex justify-between items-center border-box">
         <div className ="w-[496px] h-[189px] pt-[189px] pl[176px]  ">         
          <h1 className =" font-['Libre Bodoni'] font-[700] text-[40px] leading-[65.8px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
           </div>
           <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
           </div>
           <div className ="pt-[198px] pl-[1164px]">
            <Image
            src= "/images/sidepic.svg" 
            alt=  "jewellary pic"
            width={490}
            height={667}
            />
           </div>
           <div>
            <button>
              Eplore
            </button>
           </div>
           </div>

      
    
  )
}

export default Hero
