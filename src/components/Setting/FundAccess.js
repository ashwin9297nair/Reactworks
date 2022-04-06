import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const FundAccess = () => {
   const [name, setName] = useState('');
   const [desc, setDesc] = useState('');
   const [selectedCity1, setSelectedCity1] = useState(null);
   const cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
   ];
   const onCityChange = (e) => {
      setSelectedCity1(e.value);
   }

   return (
      <>


         <div className='lg:w-30rem md:w-30rem w-21rem mb-6'>
            <h2 className='text-900'>Fund Access</h2>
            <div className='text-lg text-900 font-semibold mb-1'>Heading</div>
            <div className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's</div>
            <div>
               <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Fund" className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
               <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
               <InputTextarea rows={5} cols={30} placeholder='Description' className='p-inputtext-sm mb-3 lg:w-20rem md:w-20rem w-full' /><br />
               <div className='text-right lg:w-20rem md:w-20rem w-21rem'>
                  <Button label='Delete' icon="pi pi-trash" className="p-button p-button-danger p-button-sm py-2 px-2 mr-2" />
                  <Button label='Save' icon="pi pi-save" className="p-button p-button-sm py-2 px-2" />
               </div>
            </div>
         </div>



      </>
   )




}

export default FundAccess