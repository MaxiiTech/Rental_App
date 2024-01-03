import React, { useState } from 'react'
import BookingModal from '../carBooking/BookingModal';
import CarCard from './CarCard'

function CarsList(props:any) {
  const [selectedCar, setSelectedcar] = useState<any>([])
  return (
    <div
      className="grid grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4"
    >
      {props.carsList.map((car: any, index: number) => (
        <div onClick={()=> {(window as any).my_modal_4.showModal();
          setSelectedcar(car)}}>
          <CarCard car={car} />
        </div>
      ))}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <BookingModal car={selectedCar}/>
      </dialog>
    </div>
  );
}

export default CarsList