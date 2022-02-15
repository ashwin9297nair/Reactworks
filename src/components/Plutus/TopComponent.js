import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

const TopComponent = () => {

 const [selectedCity1, setSelectedCity1] = useState(null);

 const onCityChange = (e) => {
  setSelectedCity1(e.value);
 }

 return (
  <div>

   <div className="p-grid p-p-0 p-mr-6">
    <div className="p-col-6 flex align-items-center">
     <div className="p-mr-1">
      <button class="p-button bg-indigo-400 p-component p-button-rounded ps-buttonCustom p-button-icon-only"><img alt='Test' className='ps-customImg' src='./images/plutus/dummy-icon.png' /></button>
     </div>
     <div>
      <strong className='text-xl text-600 font-normal'>0x2d74c87461F08b0914fcC5... </strong><br />
      <a className='text-sm' href='#'>address@gmail.com</a> <i className="pi pi-pencil"></i>
     </div>


    </div>
    <div className="p-col-6 p-text-right">
     <div className="card py-3">
      <div className="card-container p-0">
       <div className="inline ">
        <div className="p-button ps-custom-button p-button-sm p-button-icon-only"><span className="p-button-icon p-c pi pi-credit-card" style={{ 'fontSize': '20px' }}></span></div>
       </div>
       <div className="inline">
        <input type="text" className="p-inputtext p-button-sm ps-inputtext-color p-ml-1" value="Search Tokens" />
       </div>
       <div className="inline ">
        {/* <Dropdown value={selectedCity1} onChange={onCityChange} className="p-dropdown-inputtext" optionLabel="name" placeholder="Select a City" /> */}
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default TopComponent;