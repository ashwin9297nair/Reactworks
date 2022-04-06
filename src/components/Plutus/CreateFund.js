import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import { Dropdown } from 'primereact/dropdown'
import axios from 'axios';
// import { Constants } from '../utils/Constants';

const CreateFund = (props) => {

 const [fundName, setFundName] = useState(null)
 const [walletAddress, setWalletAddress] = useState(null)
 const [walletLabel, setWalletLabel] = useState(null)
 const [walletArray, setWalletArray] = useState([])
 const [fundDescription, setFundDescription] = useState(null)
 const [errorMessage, setErrorMessage] = useState(null)

 const handleSubmit = async () => {
  // axios.post(`${Constants.BASE_URL}/funds/createFund`, { fundName, walletArray })
  //   .then((res) => console.log(res))
 }


 const handleWallets = async () => {
  if (walletAddress) {
   const newElement = { walletAddress, walletLabel }
   setWalletArray(oldArray => [...oldArray, newElement]);
   setWalletAddress('')
   setWalletLabel('')
  } else {
   setErrorMessage("Wallet Address cannot be empty")
  }
 }

 const options = [
  { label: 'Nexo' },
  { label: 'Celsius' },
  { label: 'Gemini' },
  { label: 'Binance.us' },
  { label: 'Binance.com' },
  { label: 'Wazirx' }
 ]

 return (
  <div className='grid mr-6'>
   <div className='col-12 mt-4'>
    <div className='text-3xl mb-3'>Add Funds</div>
    <div className='ps-custom-box-2'>
     {/* <label>Fund Name</label><br /> */}
     <InputText value={fundName} onChange={(e) => setFundName(e.target.value)} placeholder='Fund Name' className='mb-2 p-inputtext p-inputtext-sm' />
     <div className='flex'>
      <div className='mr-2'>
       {/* <label>Wallet Address</label><br /> */}
       <InputText value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} placeholder='Wallet Address' className='p-inputtext p-component inputfield w-full p-inputtext-sm' />
      </div>
      <div className='mr-2'>
       {/* <label>Wallet Label</label><br /> */}
       <InputText value={walletLabel} onChange={(e) => setWalletLabel(e.target.value)} placeholder='Wallet Label' className='p-inputtext p-component inputfield w-full p-inputtext-sm' />
      </div>

      <Button label='Add' onClick={() => handleWallets()} className='p-button p-button-sm' />
     </div>

     <div className='flex align-items-center mt-6'>
      <div><i className='pi pi-prime text-4xl text-pink-600'></i></div>
      <div className='p-2'>
       <div className='text-lg'>Prime React</div>
       <div className='text-sm mr-2'>0x2d74c87461F08b0914fcC5194bE006209C6F7C5a</div>
      </div>
      <div>
       <button class="p-button p-button-sm mr-2 px-3">
        <span class="pi pi-save"></span>
       </button>
       <button class="p-button p-button-sm px-3">
        <span class="pi pi-trash"></span>
       </button>
      </div>
     </div>

     <div className='flex align-items-center mb-5'>
      <div><i className='pi pi-amazon text-4xl text-primary'></i></div>
      <div className='p-2'>
       <div className='text-lg'>Amazon</div>
       <div className='text-sm mr-2'>0x2d74c87461F08b0914fcC5194bE006209C6F7C5a</div>
      </div>
      <div>
       <button class="p-button p-button-sm mr-2 px-3">
        <span class="pi pi-save"></span>
       </button>
       <button class="p-button p-button-sm px-3">
        <span class="pi pi-trash"></span>
       </button>
      </div>
     </div>

     <Editor style={{ height: '300px' }} value={fundDescription} onTextChange={(e) => setFundDescription(e.htmlValue)} className='mb-4' />
     <div className='flex'>
      <div className='mr-2'>
       {/* <label>Api Key</label><br /> */}
       <InputText value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} placeholder='Api Key' className='p-inputtext p-component inputfield w-full p-inputtext-sm' />
      </div>
      <div>
       {/* <label>Secret Key</label><br /> */}
       <InputText value={walletLabel} onChange={(e) => setWalletLabel(e.target.value)} placeholder='Secret Key' className='p-inputtext p-component inputfield w-full p-inputtext-sm' />
      </div>
      <div className='ml-2'>
       <Dropdown placeholder='Centralized Finance' options={options} className='p-inputtext-sm' />
      </div>
      <Button label='Add' onClick={() => handleWallets()} className='p-button p-button-sm ml-2' />
     </div>
     <div className='flex justify-content-between mt-4'>
      <div className='text-sm'>APIKEY123456789</div>
      <div className='text-sm'>SECRETKEY123456789</div>
      <div className='text-sm'>NEXO</div>
      <div>
       <button class="p-button p-button-sm mr-2 px-3">
        <span class="pi pi-save"></span>
       </button>
       <button class="p-button p-button-sm px-3">
        <span class="pi pi-trash"></span>
       </button>
      </div>
     </div>
     <div className='flex justify-content-between mt-1'>
      <div className='text-sm'>APIKEY123456789</div>
      <div className='text-sm'>SECRETKEY123456789</div>
      <div className='text-sm'>NEXO</div>
      <div>
       <button class="p-button p-button-sm mr-2 px-3">
        <span class="pi pi-save"></span>
       </button>
       <button class="p-button p-button-sm px-3">
        <span class="pi pi-trash"></span>
       </button>
      </div>
     </div>
     <Button label='submit' onClick={() => handleSubmit()} className='p-button p-button-sm'  />
    </div>
   </div>

  </div>
 )
}

export default CreateFund;