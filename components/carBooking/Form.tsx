import { BookCreatedFlagContext } from '@/context/BookCreatedFlagContext';
import { createBooking, getStoreLocations } from '@/services/index';
import React, { useContext, useEffect, useState } from 'react'
import CarCard from '../Home/CarCard';

function Form({car}:any) {
    const [storeLocation, setStoreLocaton] = useState<any>([]);
    const {showToastMsg, setShowToastMsg}=useContext(BookCreatedFlagContext);
    const [formValue,setFormValue]= useState({
        userName:'Rahul Sanap',
        location:'',
        pickUpDate:'',
        dropOffDate:'',
        pickUpTime:'',
        dropOffTime:'',
        contactNumber:'',
        carId: ""

    })
    useEffect(()=>{
        getStoreLocation_();

    },[formValue])
    useEffect(()=>{
        if(car)
        {
            setFormValue({
                ...formValue,
                carId: {connect: 
                    {id: car.id}}
                
            });
        }
    },[car])
    const getStoreLocation_=async()=>{
        const resp:any = await getStoreLocations();
        setStoreLocaton(resp?.storesLocations)
    };
    const handleChange = (event:any)=>{
        setFormValue({
            ...formValue,
            [event.target.name]:event.target.value
        });
    }

    const handleSubmit =async ()=>{
        console.log(formValue)
        const resp= await createBooking(formValue);
        console.log(resp)
        if (resp) {
          setShowToastMsg(true)
        }
    }
  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select className="select select-bordered w-full max-w-lg"
         name='location'
         onChange={handleChange}>
          <option disabled selected>
            PickUp Location?
          </option>
          {storeLocation&&storeLocation.map((loc:any,index:number)=>(
            <option key={index}>{loc?.address}</option>
          ))}
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full ">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            name="pickUpDate"
            placeholder="Type here"
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            name='dropOffDate'
            placeholder="Type here"
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full ">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            name='pickUpTime'
            placeholder="Type here"
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name='dropOffTime'
            placeholder="Type here"
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full ">
          <label className="text-gray-400">Contact Number</label>
          <input
            type="text"
            name='contactNumber'
            placeholder="Type here"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="modal-action">
      <button className="btn">Close</button>
      <button className="btn bg-blue-500 text-white hover:bg-blue-800"
      onClick={handleSubmit}>Save</button>
      </div>
        
      </div>
      
    </div>
  );
}

export default Form
