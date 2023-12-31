import React, { useEffect, useState } from 'react'
import JobLayout from '../components/JobLayout'
import data from '../data.json'

const Home = () => {
    const [filterValues, setFilterValues] = useState([])
    const [datavalues, setDataValues] = useState([])

    useEffect(() =>{
        // setDataValues(data.filter((job)=> job.languages.map((languages)=>languages.includes(filterValues))))
        const fiterout = data.filter((job) => filterValues.every(lang => job.languages.includes(lang)))
        console.log(fiterout);
        setDataValues(fiterout)
    },[filterValues])

    function removeFilter(item){
     setFilterValues(filterValues.filter((job)=> job!==item))
    }
   

  return (
    <div className='max-w-5xl p-10 mx-auto relative'>
        {filterValues.length>0&&<div className='flex shadow-xl justify-between items-center w-5xl h-[72px] bg-white rounded-md '>
    <div className='flex'>
    {filterValues.map((item,index)=> <p key={index} className='mx-3 flex justify-center items-center'><span className='ml-2 px-2 rounded-l-md text-[#5CA5A5] text-[16px] font-bold bg-[#5CA5A5] bg-opacity-35 py-1'>{item}</span> <span onClick={()=>removeFilter(item)} className='cursor-pointer inline-block'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M0 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H0V0Z" fill="#5CA5A5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.435 11.1213L20.3137 9L15.7175 13.5962L11.1213 9L9 11.1213L13.5962 15.7175L9 20.3137L11.1213 22.435L15.7175 17.8388L20.3137 22.435L22.435 20.3137L17.8388 15.7175L22.435 11.1213Z" fill="white"/>
            </svg>
        </span>
        </p>)}
    </div>
       
        <p className=' text-[#5CA5A5] text-[16px] font-bold mx-3 cursor-pointer' onClick={()=>setFilterValues([])}>Clear</p>
        </div>}
        {datavalues.map((items,index)=>{
            return(
                <div key={items.id}>
                    <JobLayout items={items} setFilterValues={setFilterValues} filterValues={filterValues}/>
                </div>
            )

        })}
    </div>
  )
}

export default Home