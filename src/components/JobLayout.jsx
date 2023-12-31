import React from 'react'

const JobLayout = ({items,setFilterValues,filterValues}) => {
  return (
    <div className='md:grid md:grid-cols-8 bg-white p-5 rounded-md mx-auto my-10 md:my-5 relative'>
        <div className='col-span-1 absolute -top-[22px] left-5 md:static'>
            <img src={items.logo} alt='' className=' w-[48px] h-[48px] md:w-auto md:h-auto' />
        </div>
        <div className='col-span-4 my-3 md:my-auto'>
            <div className=''>
                <span className='text-[#5CA5A5] md:text-[18px] text-[13px] font-bold'>{items.company}</span>   
                    {items.new &&<span className='bg-[#5CA5A5] text-white py-2 text-[14px] font-bold px-2 ml-5 rounded-md'>NEW!</span>}
                    {items.featured &&<span className='bg-[#2B3939] text-white  text-[14px] font-bold py-2 px-2 mx-2 rounded-md'>FEATURED</span>}
            </div>
            <div>
                <p className='text-[#2B3939] font-bold  md:text-[22px] text-[15px]  my-1'>{items.position}</p>
            </div>
            <div className='text-[#7C8F8F] font-medium text-[16px] md:text-[18px]'>
                <span className=' '>{items.postedAt}</span>   
                <span className='mx-5 '>{items.contract}</span>
                <span className=' '>{items.location}</span>
            </div>
        </div>
        <hr className='md:hidden my-5'/>
        
        <div className='flex flex-wrap md:flex-nowrap md:justify-end items-center gap-3 md:gap-0 col-span-3'>
            {items.languages.map((item,index)=>{
           return  ( 

           <p key={index} onClick={() => {
            // Check if the item already exists in the array
            if (!filterValues.includes(item)) {
              setFilterValues((prev) => [...prev, item]);
            }
          }} className='bg-[#5CA5A5] cursor-pointer mx-2 bg-opacity-90 rounded-md py-1 px-2 text-[16px] text-white'>{item}</p>
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