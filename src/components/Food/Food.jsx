import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

let food_data=[
    {
        id:1,
        name:'burger',
        image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww',
        price:'233 Birr',
        qty:'',
        cart_added:false
    },
    {
        id:2,
        name:'pizza',
        image:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
        price:'300 Birr',
        qty:'',
        cart_added:false
    },
    {
        id:3,
        name:'ice cream',
        image:'https://plus.unsplash.com/premium_photo-1666920428775-ec9ddeaae574?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D',
        price:'250 Birr',
        qty:'',
        cart_added:false
    },
    {
        id:4,
        name:'donut',
        image:'https://plus.unsplash.com/premium_photo-1672846027103-a50797886f99?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price:'100 Birr',
        qty:'',
        cart_added:false

    },
    {
        id:5,
        name:'cookie',
        image:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D',
        price:'150 Birr',
        qty:'',
        cart_added:false
    },
    {
        id:6,
        name:'fries',
        image:'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZXN8ZW58MHx8MHx8fDA%3D',
        price:'150 Birr',
        qty:'',
        cart_added:false
    },
    


]
function Food() {

    const [addCart,setCart]=useState([])
    const [addFood,setFood]=useState([])
    const [showOrd , setShowOrd]=useState(false)
    function addQty(id,  qty,e,prod,img){

        let qty_  = Number(qty)
        let price = parseFloat(e)
        setFood(
            addFood => addFood.some(item => item.id === id)
              ? addFood.map(item => item.id === id
                  ? { ...item, qty: qty_+1,price:price   ,name:prod ,image:img} 
                  : item 
                )
              : [ ...addFood, {id,   qty:qty_+1,price:price,name:prod,image:img } ]
          )

           setCart(
      addCart => addCart.some(item => item.id === id)
        ? addCart.map(item => item.id === id
            ? { ...item, qty: qty_+1,price:price  ,name:prod ,image:img,cart_added:true} 
            : item 
          )
        : [ ...addCart, {id,   qty:qty_+1,price:price,name:prod,image:img,cart_added:true } ]
    )
    }
   
useEffect(()=>{
     setFood(food_data);

},[])

 
const handleCart = (id,  qty,e,prod,img) => {
    
    let qty_  = Number(qty)
    let price = parseFloat(e)
   setFood(
    addFood => addFood.some(item => item.id === id)
        ? addFood.map(item => item.id === id
            ? { ...item, qty: qty_+1,price:price   ,name:prod ,image:img,cart_added:true} 
            : item 
          )
        : [ ...addFood, {id,   qty:qty_+1,price:price,name:prod,image:img,cart_added:true } ]
   )
    setCart(
      addCart => addCart.some(item => item.id === id)
        ? addCart.map(item => item.id === id
            ? { ...item, qty: qty_+1,price:price  ,name:prod ,image:img,cart_added:true} 
            : item 
          )
        : [ ...addCart, {id,   qty:qty_+1,price:price,name:prod,image:img,cart_added:true } ]
    )
    setShowOrd(true)

    
    
    }
    const handleCartRemove = (id,  qty,e,prod,img,i) => {
        let qty_  = Number(qty)
        let price = parseFloat(e)
       
       
        if(addFood[i]?.qty<=0){
       
      
 
            return setFood(
                addFood => addFood.some(item => item.id === id)
                  ? addFood.map(item => item.id === id
                      ? { ...item, qty: qty_,price:price   ,name:prod ,image:img,cart_added:false} 
                      : item 
                    )
                  : [ ...addFood, {id,   qty:qty_,price:price,name:prod,image:img ,cart_added:false} ]
              )
                  }
      
        setFood(
            addFood => addFood.some(item => item.id === id)
              ? addFood.map(item => item.id === id
                  ? { ...item, qty: qty_-1,price:price   ,name:prod ,image:img} 
                  : item 
                )
              : [ ...addFood, {id,   qty:qty_-1,price:price,name:prod,image:img } ]
          )
          setCart(
            addCart => addCart.some(item => item.id === id)
              ? addCart.map(item => item.id === id
                  ? { ...item, qty: qty_-1,price:price   ,name:prod ,image:img} 
                  : item 
                )
              : [ ...addCart, {id,   qty:qty_-1,price:price,name:prod,image:img } ]
          )

          if(addCart[i]?.qty<=0){
       
            console.log('loswrr',addCart)
          addCart.splice(i, 1);
          
          return setCart([...addCart])
        }
        if(addCart.length<=0){
            setShowOrd(false)
        }
              }
    
const qty = addCart.reduce((c,d)=>c+d.qty,0)
console.log('---',addCart)
  return (
    <div className='w-screen h-screen bg-slate-900 text-white relative'>
        <div className='h-full overflow-scroll  '>
        <div className=' grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 lg:w-1/2 w-screen '>
            {
                addFood?.map((c,i)=>(
                    <div key={i} className='  rounded-md relative px-2 py-5 '>
                        {
                            c.qty?<div className='rounded-full absolute top-2 bg-yellow-500 z-20 text-white p-1 w-8 flex justify-center'>{c.qty}</div>:<div></div>
                        }
                        
                        <div className='w-40 border border-slate-800 rounded-md '>
                                <img className='object-cover rounded-md  lg:h-40  lg:w-40 md:h-40 md:w-40 w-56 h-20'src={c.image}/>
                            </div>

                        <div className='flex mt-3 gap-3   lg:w-40  md:w-40 w-15 '>
                          
                            
                        <div className=' text-left font-semibold lg:text-base text-xs capitalize '>{c.name}</div>
                            <div className='font-semibold lg:text-base text-white text-xs  '>{c.price}</div>
                        </div>
                      
                        {
                        c.qty ? <div className='flex gap-4 mt-2'>
                            <div onClick={e=>handleCartRemove(c.id,c.qty,c.price,c.name,c.image,i)} className=' text-2xl font-bold bg-red-500 text-white  w-14 flex justify-center rounded-md '>
                                -
                            </div>

                            <div onClick={e=>addQty(c.id,c.qty,c.price,c.name,c.image)} className=' text-2xl font-bold bg-yellow-500 text-white  w-14 flex justify-center rounded-md '>
                                +
                            </div>
                        </div>:

                            <div onClick={e=>handleCart(c.id,c.qty,c.price,c.name,c.image)} className=' mt-3 cursor-pointer rounded-md lg:w-40 md:w-40 w-40 lg:p-2 md:p-2 p-1 flex justify-center font-bold bg-yellow-500 text-white lg:text-base text-sm'>
                            ADD
                            </div>
                        }
                    
                    </div>
                ))
            }
        </div>
   
      
        </div>
        {
            qty?
            <Link to="/order" state={{ from:addCart }}>
             <div className='bg-green-500 text-white p-2 w-full text-center py-6 absolute  uppercase cursor-pointer'>View Order</div>
            </Link>
            :<></>
        
        }
    </div>
  )
}

export default Food