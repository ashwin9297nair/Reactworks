import React from 'react'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const SignIn = () => {
 return (
  <>

   <div className="p-grid p-0 m-0 mt-5 mt-5 lg:p-6 md:p-6 flex align-items-center justify-content-center">
    <div className="col-10 offset-2 offset-2 p-0 m-0 shadow-3 border-round">
     <div className='p-grid p-0 m-0 flex ps-height-signin-signup'>
      <div className="p-col-12 p-md-6 p-lg-6 bg-indigo-500 ps-border-left flex align-items-center justify-content-center">
       <div className='m-2 p-2 text-center'>
        <Button className="my-2 w-14rem p-button-sm text-white ps-signin-button font-light" label="Connect with Metamas" /> <br />
        <Button className="my-2 w-14rem p-button-sm text-white ps-signin-button font-light" label="Connect with WalletConnect" />
       </div>
      </div>

      <div className="p-col-12 p-md-6 p-lg-6 pl-4 flex align-items-center sm:justify-content-center lg:justify-content-start">
       <div className='lg:ml-6 sm:mb-3'>
        <h2 className='text-indigo-500'>Sign In</h2>
        <div>
         <InputText type="text" className="inputfield surface-100 p-inputtext-sm mb-3 w-full border-300" placeholder="Email" /><br />
         <InputText type="text" className="inputfield surface-100 p-inputtext-sm mb-3 w-full border-300" placeholder="Password" /><br />
         <InputText type="text" className="inputfield surface-100 p-inputtext-sm mb-3 w-full border-300" placeholder="Fundhouse" />
         <Button className="my-2 w-full p-button-sm text-sm" label="Next" />
        </div>
       </div>
      </div>
     </div>
    </div>

   </div>
  </>
 )
}

export default SignIn