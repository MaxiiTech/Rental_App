import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGasPump } from "react-icons/fa"
import { MdAirlineSeatReclineNormal } from "react-icons/md"
import { PiSteeringWheelFill } from "react-icons/pi"
function CarCard(props:any) {
  const [car, setCar] = useState(props.car);
  
  useEffect(()=>{
    if (props.car) 
    {
      setCar(props.car)
    }
  },[props.car])
  return car&& (
    <div className="group bg-gray-50 p-2 sm:p-5 rounded-3xl m-1 sm:m-5
    hover:bg-white
    hover:border-[1px] cursor-pointer duration-50 border-blue-500">
      <h2 className="text-[20px] font-medium mb-2">{car.name}</h2>
      <h2 className="text-[28px] font-bold mb-2">
        <span className="text-[12px] font-light">$</span>
        {car.price}
        <span className="text-[12px] font-light">/day</span>
      </h2>
      <Image
        src={car.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className="w-[250px] h-[150px] mb-3 object-contain"
      />
      <div className="flex justify-around group-hover:hidden">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2"/>
          <h2 className="line-clamp-5 text-[14px] font-light">{car.carType}</h2>
        </div>
        <div className="text-center text-gray-500">
          <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2"/>
          <h2 className="line-clamb-5 text-[14px]">{car.seats} Seats</h2>
      
        </div>
        <div className="text-center text-gray-500">
          <FaGasPump className="w-full text-[22px] mb-2"/>
          <h2 className="line-clamp-5 text-[14px] font-light">{car.carAvg} MPG</h2>
        </div>

      </div>
      <button className="hidden group-hover:flex bg-gradient-to-r from-blue-400 text-white
      p-2 rounded-lg text-[20px] w-full px-5 justify-between"> Rent Now
      <span className="bg-blue-400 p-1 rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
      </span>
         
      </button>
    </div>
  );
}

export default CarCard;
