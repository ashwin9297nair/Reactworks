import React from 'react';
const TokenButtonComponent = () => {
 return (
  <div className="p-grid p-p-0 p-mr-6">
     <div className="p-col-12 mt-3">
      <div className='text-3xl font-normal mt-2'>Dashboard</div>
      <button class="ps-custom-box cursor-pointer transition-duration-500 mt-3">
       <strong className='text-base'>0x2d74c87461F08b0914fcC5...</strong><br />
       <span className='text-base'>$0.00</span>
      </button>
      <button class="ps-custom-box-1 cursor-pointer">
       <strong className='text-base'>0x2d74c87461F08b0914fcC5...</strong><br />
       <span className='text-base'>$0.00</span>
      </button>
     </div>
    </div>

   )
}
export default TokenButtonComponent;