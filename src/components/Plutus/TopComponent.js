import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';

const TopComponent = () => {

 const [displayBasic, setDisplayBasic] = useState(false);
 const dialogFuncMap = {
  'displayBasic': setDisplayBasic
 }

//  const onClick = (name, position) => {
//   dialogFuncMap[`${name}`](true);

//  }

//  const onHide = (name) => {
//   dialogFuncMap[`${name}`](false);
//  }

//  const renderFooter = (name) => {
//   return (
//    <div>
//     <div className="p-button ps-custom-button p-button-sm"><span className="p-button-icon p-c pi pi-credit-card" style={{ 'fontSize': '20px' }} onClick={() => onHide(name)}></span></div>
//    </div>
//   );
//  }


 return (
  <div>

   {/* <div className="dialog-demo" >
    <div className="card">
     <Dialog header="Blockchain" visible={displayBasic} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
      <div className='flex align-items-center justify-content-center'>
      <img alt='Test' src='./images/plutus/popup/pop_up01.png' />
      </div>
      
      <br />
      <br />
      <input type="text" className="p-inputtext p-inputtext-sm p-ml-1 text-xs" placeholder='ENTER YOUR EMAIL ADDRESS' />
     </Dialog>
    </div>
   </div> */}

   <div className="p-grid p-p-0 p-mr-6">
    <div className="p-col-6 flex align-items-center">
     <div className="p-mr-1">
      <button class="p-button bg-indigo-400 p-component p-button-rounded ps-buttonCustom p-button-icon-only"><img alt='Test' className='ps-customImg' src='./images/plutus/dummy-icon.png' /></button>
     </div>
     <div>
      <strong className='text-xl text-600 font-semibold'>0x2d74c87461F08b0914fcC5... </strong><br />
      <a className='text-sm' href='#'>address@gmail.com</a> <i className="pi pi-pencil"></i>
     </div>
     <div>

      {/* <div onClick={() => onClick('displayBasic')} class="transition-colors transition-duration-500 hover:bg-indigo-100 ml-4 border-1 border-300 border-round
    flex align-items-center justify-content-center font-bold border-round cursor-pointer px-3 py-2">

       <div className="p-mr-2">
        <img alt='Test' src='./images/plutus/token_icon2.png' style={{ width: "35px" }} />
       </div>
       <div>
        <strong className='text-md text-900 font-light'>Account0x2d74c87461F... </strong>
       </div>
      </div> */}
     </div>

    </div>


    <div className="p-col-6 p-text-right">

     <div className="card py-3">
      <div className="card-container p-0">
       <div className="inline ">
        <div className="p-button ps-custom-button p-button-sm"><span className="p-button-icon p-c pi pi-credit-card" style={{ 'fontSize': '20px' }}></span></div>
       </div>
       <div className="inline p-input-icon-right">
        <input type="text" className="p-inputtext ps-inputtext-custom surface-100 p-inputtext-sm ps-inputtext-color p-ml-1 text-sm" value="Search Tokens" />
        <i className="pi pi-search" />
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default TopComponent;