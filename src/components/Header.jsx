import React from 'react'

const Header = () => {
  return (
    <>
    <div className='bg-[#5CA5A5] hidden md:block'>
        <img src='/images/bg-header-desktop.svg' alt='' className=''/>
    </div>
    <div className='bg-[#5CA5A5] md:hidden'>
        <img src='/images/bg-header-mobile.svg' alt='' className=''/>
    </div>
    </>
    
  )
}

export default Header