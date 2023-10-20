import { Divider } from 'antd'
import React from 'react'

function ShippingAddr() {

  return (
    <div className='bg-slate-900 text-white w-screen h-screen relative mb-4'>
  
        <form className=' rounded-md divide-y-2  divide-slate-600  '>
        <div className='font-bold text-green-500 p-4 bg-slate-700 '>Shipping address
            <div>
            <input className='bg-slate-700 w-full  py-2 focus:outline-none' placeholder='Address 1(Street)'/>
            </div>
            </div>
         
 
            <div>
            <input className='bg-slate-700 w-full px-4 py-2 focus:outline-none' placeholder='Address 2(Street)'/>
            </div>
            <div>
            <input className='bg-slate-700 w-full px-4 py-2 focus:outline-none' placeholder='City'/>
            </div>
            <div>
            <input className='bg-slate-700 w-full px-4 py-2 focus:outline-none' placeholder='State'/>
            </div>
            <div>
            <input className='bg-slate-700 w-full px-4 py-2 focus:outline-none' placeholder='Country'/>
            </div>
            <div>
            <input className='bg-slate-700 w-full px-4 py-2 focus:outline-none'   placeholder='Postcode'/>
            </div>
            <div className='font-bold text-green-500 p-4 bg-slate-700 mt-4'>
                Recevier
                <div>
            <input className='bg-slate-700 w-full  py-2 focus:outline-none' placeholder='Full Name'/>
            </div>
            </div>
           
            <div>
            <input className='bg-slate-700 w-full px-4 py-2' placeholder='Phone Number'/>
            </div>
        </form>   
    </div>
  )
}

export default ShippingAddr