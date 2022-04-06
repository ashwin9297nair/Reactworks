import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const FundHouse = () => {
 const [name, setName] = useState('');
 const [address, setAddress] = useState('');
 const [email, setEmail] = useState('');
 const [website, setWebsite] = useState('');
 const [desc, setDesc] = useState('');

 return (
  <>

   <div className='lg:w-30rem md:w-30rem w-21rem mb-6'>
    <h2 className='text-900'>Fund House Description</h2>
    <div className='text-lg text-900 font-semibold mb-1'>Heading</div>
    <div className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's</div>
    <div>

     <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
     <InputText value={address} onChange={(e) => setName(e.target.value)} placeholder='Address' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
     <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
     <InputText value={website} onChange={(e) => setWebsite(e.target.value)} placeholder='Website' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
     <InputText value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />

     <div className='text-right lg:w-20rem md:w-20rem w-21rem'>
     <Button label='Save' icon="pi pi-save" className="p-button p-button-sm py-2 px-2" />
     </div>
    </div>
   </div>
  </>
 )




}

export default FundHouse