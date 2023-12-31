import React from 'react'

const JobLayout = ({items,setFilterValues,filterValues}) => {
  return (
    <div className='grid grid-cols-8 bg-white p-5 rounded-md mx-auto my-5'>
        <div className='col-span-1'>
            <img src={items.logo} alt='' className='' />
        </div>
        <div className='col-span-4'>
            <div className=''>
                <span className='text-[#5CA5A5] text-[18px] font-bold'>{items.company}</span>   
                    {items.new &&<span className='bg-[#5CA5A5] text-white py-2 px-2 ml-5 rounded-md'>NEW!</span>}
                    {items.featured &&<span className='bg-[#2B3939] text-white py-2 px-2 mx-2 rounded-md'>FEATURED</span>}
            </div>
            <div>
                <p className='text-[#2B3939] font-bold text-[22px] my-1'>{items.position}</p>
            </div>
            <div className='text-[#7C8F8F] font-medium text-[18px]'>
                <span className=' '>{items.postedAt}</span>   
                <span className='mx-5 '>{items.contract}</span>
                <span className=' '>{items.location}</span>
            </div>
        </div>
        
        <div className='flex justify-end items-center col-span-3'>
            {items.languages.map((item,index)=>{
           return  ( 

           <p key={index} onClick={() => {
            // Check if the item already exists in the array
            if (!filterValues.includes(item)) {
              setFilterValues((prev) => [...prev, item]);
            }
          }} className='bg-[#5CA5A5] cursor-pointer mx-2 bg-opacity-90 rounded-md py-1 px-2 text-white'>{item}</p>
           )
            })}
            {items.tools.map((item,index)=>{
           return  ( 

           <p key={index} onClick={()=>setFilterValues(pre=>[...pre,item])} className='bg-[#5CA5A5] cursor-pointer mx-2 bg-opacity-90 rounded-md py-1 px-2 text-white'>{item}</p>
           )
            })}

           <p  className='bg-[#5CA5A5] cursor-pointer mx-2 bg-opacity-90 rounded-md py-1 px-2 text-white'>{items.level}</p>
          
            
            
        </div>
    </div>
  )
}

export default JobLayout