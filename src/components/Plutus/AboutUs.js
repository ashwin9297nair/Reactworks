import React from 'react'

const AboutUs = () => {
 return (
  <>
   <div className='content01 mb-2'>
    <div style={{ backgroundColor: '#fff', padding: '0' }} className='p-0 m-0'>
     <div className='grid p-0 m-0'>
      <div className='p-col-12 p-md-6 p-lg-4'>
       <div className='ml-3 pr-3 lg:ml-6 lg:pr-6'>
        <img className='brandLogo-img' src='./images/brandNameIndigo.png' />
       </div>
      </div>

      {/* <div className='p-col-12 p-md-6 p-lg-4'>
           </div> */}
     </div>
    </div>

    <div className='text-center'>
     <div className='grid align-items-center p-0 m-0'>
      <div className='p-col-12 p-md-6 p-lg-6 p-lg-offset-3 p-md-offset-3'>
       <h1 className='text-3xl lg:text-6xl text-900 font-light p-0 m-0'>We are</h1>
       <p className='text-lg lg:text-2xl p-0 m-0 mb-2'>
        We are a global team of blockchain developers backed by a leading Silicon Valley based serial technology entrepreneur with headquarter in North America.
       </p>

       <h1 className='text-3xl lg:text-6xl text-900 font-light p-0 m-0'>Our Mission</h1>
       <p className='text-xl lg:text-2xl p-0 m-0 mb-2'>
       Our mission it to help investors manage and grow their digital assets by providing transparent tools and services that help investors make timely, efficient, and more profitable investment choices.
       </p>

       <h1 className='text-3xl lg:text-6xl text-900 font-light p-0 m-0'>Join our team</h1>
       <p className='text-xl lg:text-2xl p-0 m-0'>
       Contribute to building world’s largest defi platform
       </p>


       <button class="p-button mt-6">
        <span class="p-button-label p-c font-light">Careers </span>
       </button>

      </div>


     </div>

    </div>
   </div>
   <div class="col-12 border-bottom-1 border-200"></div>
   <div className='mt-1 ml-3 pr-3 lg:ml-6 lg:pr-6'>
    <div className='grid p-0 m-0 pb-3 flex align-items-center'>
     <div className='p-col-12 p-md-6 p-lg-6 md:flex align-items-center text-center text-sm'>
      <div>
       <a className='p-2' href='#'>About</a>
       <a className='p-2' href='#'>Docs</a>
       <a className='p-2' href='#'>Privacy</a>
       <a className='p-2' href='#'>Terms</a>
      </div>

      <div className='mt-2'>
       <span><img className='mr-1' style={{ width: '24px' }} alt='Discort' src='./images/plutus/discort.png' /></span>
       <span><img className='mr-1' style={{ width: '24px' }} alt='Twitter' src='./images/plutus/twitter.png' /></span>
       <span><img className='mr-1' style={{ width: '24px' }} alt='Linkedin' src='./images/plutus/linkedin.png' /></span>
       <span><img className='mr-1' style={{ width: '24px' }} alt='Telegram' src='./images/plutus/telegram_icon.png' /></span>
       <span><img className='mr-1' style={{ width: '24px' }} alt='Telegram' src='./images/plutus/medium_icon.png' /></span>
      </div>

     </div>
     <div className='p-col-12 p-md-6 p-lg-6 md:text-right text-center'>
      <div className='text-base'>©2022 by PrideVel Business Solutions LLC.</div>
     </div>
    </div>

   </div>
  </>
 )
}

export default AboutUs;
