import React from 'react'
import bannerImg from "../../assets/banner.png"



const Banner = () => {
  return (
    <div className="grid grid-cols-1 gap-4 place-items-center md:grid-flow-col md:auto-cols-fr md:[direction:rtl]">

    <div className='  flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>


    <div className='pt-3 md:text-left '>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
            <p className='mb-10 '>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

            <button className='btn-primary'>Subscribe</button>
        </div>


        
        
        

       
    </div>

   


  )
}

export default Banner
